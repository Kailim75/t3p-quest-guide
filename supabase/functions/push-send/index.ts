import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'
import * as webpush from 'jsr:@negrel/webpush@0.5.0'
import { vapidSubject } from '../_shared/vapidSubject.ts'
import {
  isReminderHour,
  parisDay,
  selectDailyReminderTargets,
} from '../_shared/dailyReminder.ts'

/**
 * Envoi des rappels de révision aux apprenants (Web Push).
 *
 * Réservé au formateur : l'appelant doit être administrateur. Un appel avec
 * la clé de service est également accepté, pour le rappel automatique
 * quotidien déclenché côté base.
 *
 * Le secret VAPID_KEYS contient la paire de clés au format JWK, telle que
 * produite par le script de génération de la bibliothèque.
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface PushRequest {
  /** Envoi manuel : le formateur a choisi ses destinataires. */
  user_ids?: string[]
  /** Envoi automatique : « defi-du-jour » relance ceux qui ne l'ont pas fait. */
  audience?: 'defi-du-jour'
  /** Ignore la garde horaire — pour qu'un formateur puisse tester. */
  force?: boolean
  title?: string
  body?: string
  url?: string
}

interface SubscriptionRow {
  user_id: string
  endpoint: string
  p256dh: string
  auth: string
  last_reminded_at: string | null
}

const DAILY_REMINDER = {
  title: 'Votre défi du jour vous attend',
  body: '5 questions, 3 minutes. Gardez le rythme jusqu\'au jour J.',
  url: '/defi',
}

/**
 * Les clés d'abonnement doivent être en base64**url**. Certaines lignes ont
 * été enregistrées en base64 standard : on normalise à la lecture plutôt que
 * d'exiger des élèves qu'ils réactivent leurs rappels.
 */
const normalizeKey = (value: string) =>
  value.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

const json = (payload: unknown, status = 200) =>
  new Response(JSON.stringify(payload), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, serviceKey)

    // La tâche planifiée s'authentifie avec un secret dédié : il n'ouvre que
    // l'envoi de rappels, là où la clé de service donnerait toute la base.
    const cronSecret = Deno.env.get('PUSH_CRON_SECRET')
    const isCron = !!cronSecret && req.headers.get('x-cron-secret') === cronSecret
    let isAutomated = isCron

    if (!isCron) {
      const token = req.headers.get('Authorization')?.replace('Bearer ', '') ?? ''
      if (!token) return json({ error: 'Authentification requise' }, 401)

      if (token === serviceKey) {
        isAutomated = true
      } else {
        const { data: { user }, error: authError } = await supabase.auth.getUser(token)
        if (authError || !user) return json({ error: 'Authentification invalide' }, 401)

        const { data: isAdmin } = await supabase.rpc('has_role', {
          _user_id: user.id,
          _role: 'admin',
        })
        if (!isAdmin) return json({ error: 'Réservé aux formateurs' }, 403)
      }
    }

    // Une tâche planifiée n'envoie pas toujours de corps : pour un appel
    // automatique sans instruction, le rappel du soir est le comportement voulu.
    const request: PushRequest = await req.json().catch(() => ({}))
    const { user_ids, force, title, body, url } = request
    const audience =
      request.audience ?? (isAutomated && !user_ids?.length ? 'defi-du-jour' : undefined)

    const now = new Date()
    const today = parisDay(now)

    let subscriptions: SubscriptionRow[]
    let payload: { title: string; body: string; url: string }

    if (audience === 'defi-du-jour') {
      // Appelée toutes les heures : on ne relance qu'au créneau du soir.
      if (!force && !isReminderHour(now)) {
        return json({ sent: 0, failed: 0, expired: 0, skipped: 'hors créneau' })
      }

      const [{ data: allSubs }, { data: profiles }, { data: done }] = await Promise.all([
        supabase.from('push_subscriptions').select('user_id, endpoint, p256dh, auth, last_reminded_at'),
        supabase
          .from('profiles')
          .select('id, access_expires_at')
          .eq('is_approved', true)
          .is('archived_at', null),
        supabase.from('user_daily_challenges').select('user_id').eq('challenge_date', today),
      ])

      const targets = selectDailyReminderTargets({
        subscriptions: (allSubs ?? []) as SubscriptionRow[],
        profiles: profiles ?? [],
        challengeDoneUserIds: (done ?? []).map((row) => row.user_id),
        today,
      })
      subscriptions = targets as SubscriptionRow[]
      payload = DAILY_REMINDER
    } else {
      if (!Array.isArray(user_ids) || user_ids.length === 0) {
        return json({ error: 'Aucun destinataire' }, 400)
      }

      const { data, error: readError } = await supabase
        .from('push_subscriptions')
        .select('user_id, endpoint, p256dh, auth, last_reminded_at')
        .in('user_id', user_ids)
      if (readError) throw readError

      subscriptions = (data ?? []) as SubscriptionRow[]
      payload = {
        title: title || 'École T3P',
        body: body || "C'est le moment de réviser : 5 questions suffisent aujourd'hui.",
        url: url || '/',
      }
    }

    if (!subscriptions.length) {
      return json({ sent: 0, failed: 0, expired: 0, message: 'Aucun appareil à relancer' })
    }

    const vapidKeys = await webpush.importVapidKeys(
      JSON.parse(Deno.env.get('VAPID_KEYS') ?? '{}'),
      { extractable: false }
    )
    const appServer = await webpush.ApplicationServer.new({
      contactInformation: vapidSubject(Deno.env.get('VAPID_SUBJECT')),
      vapidKeys,
    })

    const message = JSON.stringify(payload)

    let sent = 0
    let lastError = ''
    const delivered: string[] = []
    const expired: string[] = []
    const failures: string[] = []

    for (const row of subscriptions) {
      try {
        const subscriber = appServer.subscribe({
          endpoint: row.endpoint,
          keys: { p256dh: normalizeKey(row.p256dh), auth: normalizeKey(row.auth) },
        })
        await subscriber.pushTextMessage(message, {})
        sent++
        delivered.push(row.endpoint)
      } catch (error) {
        // 404/410 : l'élève a désinstallé l'app ou révoqué l'autorisation.
        // L'abonnement est mort, on nettoie plutôt que de réessayer sans fin.
        const pushError = error instanceof webpush.PushMessageError ? error : null
        const status = pushError?.response.status

        if (status === 404 || status === 410) {
          expired.push(row.endpoint)
        } else {
          failures.push(row.endpoint)
          // Le service de push explique son refus dans le corps de la
          // réponse (Apple : « BadJwtToken », « TopicDisallowed »…) :
          // sans lui, un 403 reste indéchiffrable.
          const reason = pushError ? await pushError.response.text().catch(() => '') : ''
          lastError = `${status ?? 'erreur'} ${reason}`.trim()
          console.error('Échec envoi push', status, reason, row.endpoint, error)
        }
      }
    }

    if (expired.length) {
      await supabase.from('push_subscriptions').delete().in('endpoint', expired)
    }

    // Trace de la dernière relance : évite un doublon si la tâche planifiée
    // repasse dans l'heure, et renseigne le formateur.
    if (delivered.length) {
      await supabase
        .from('push_subscriptions')
        .update({ last_reminded_at: now.toISOString() })
        .in('endpoint', delivered)
    }

    return json({
      sent,
      failed: failures.length,
      expired: expired.length,
      ...(lastError ? { reason: lastError.slice(0, 300) } : {}),
    })
  } catch (error) {
    console.error('push-send', error)
    return json({ error: (error as Error).message ?? 'Erreur inattendue' }, 500)
  }
})
