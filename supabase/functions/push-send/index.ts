import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'
import * as webpush from 'jsr:@negrel/webpush@0.5.0'
import { vapidSubject } from './vapidSubject.ts'

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
  user_ids: string[]
  title?: string
  body?: string
  url?: string
}

interface SubscriptionRow {
  endpoint: string
  p256dh: string
  auth: string
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

    const token = req.headers.get('Authorization')?.replace('Bearer ', '') ?? ''
    if (!token) return json({ error: 'Authentification requise' }, 401)

    // Le rappel automatique s'authentifie avec la clé de service ;
    // sinon, l'appelant doit être administrateur.
    if (token !== serviceKey) {
      const { data: { user }, error: authError } = await supabase.auth.getUser(token)
      if (authError || !user) return json({ error: 'Authentification invalide' }, 401)

      const { data: isAdmin } = await supabase.rpc('has_role', {
        _user_id: user.id,
        _role: 'admin',
      })
      if (!isAdmin) return json({ error: 'Réservé aux formateurs' }, 403)
    }

    const { user_ids, title, body, url }: PushRequest = await req.json()
    if (!Array.isArray(user_ids) || user_ids.length === 0) {
      return json({ error: 'Aucun destinataire' }, 400)
    }

    const { data: subscriptions, error: readError } = await supabase
      .from('push_subscriptions')
      .select('endpoint, p256dh, auth')
      .in('user_id', user_ids)
    if (readError) throw readError

    if (!subscriptions?.length) {
      return json({ sent: 0, failed: 0, expired: 0, message: 'Aucun appareil abonné' })
    }

    const vapidKeys = await webpush.importVapidKeys(
      JSON.parse(Deno.env.get('VAPID_KEYS') ?? '{}'),
      { extractable: false }
    )
    const appServer = await webpush.ApplicationServer.new({
      contactInformation: vapidSubject(Deno.env.get('VAPID_SUBJECT')),
      vapidKeys,
    })

    const message = JSON.stringify({
      title: title || 'École T3P',
      body: body || "C'est le moment de réviser : 5 questions suffisent aujourd'hui.",
      url: url || '/',
    })

    let sent = 0
    let lastError = ''
    const expired: string[] = []
    const failures: string[] = []

    for (const row of subscriptions as SubscriptionRow[]) {
      try {
        const subscriber = appServer.subscribe({
          endpoint: row.endpoint,
          keys: { p256dh: normalizeKey(row.p256dh), auth: normalizeKey(row.auth) },
        })
        await subscriber.pushTextMessage(message, {})
        sent++
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
