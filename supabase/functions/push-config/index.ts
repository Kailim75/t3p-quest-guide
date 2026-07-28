import * as webpush from 'jsr:@negrel/webpush@0.5.0'
import { vapidSubject } from '../push-send/vapidSubject.ts'

/**
 * Clé publique VAPID, nécessaire au navigateur pour s'abonner aux rappels.
 *
 * Elle est publique par nature (elle voyage dans chaque abonnement), mais on
 * la sert depuis le serveur plutôt que de la recopier dans le code du site :
 * une seule source de vérité, et une rotation de clé ne demande aucun
 * redéploiement du front.
 *
 * Le secret VAPID_KEYS contient la paire au format JWK ; le navigateur, lui,
 * attend le point EC brut en base64url.
 */

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  let publicKey: string | null = null
  // Diagnostic : la clé publique servie aux navigateurs doit être celle qui
  // correspond à la clé privée de signature, sinon le service de push
  // rejette l'envoi (Apple : 403 Forbidden).
  let keyPairValid: boolean | null = null

  try {
    const exported = JSON.parse(Deno.env.get('VAPID_KEYS') ?? '{}')
    if (exported.publicKey && exported.privateKey) {
      const keys = await webpush.importVapidKeys(exported)
      publicKey = await webpush.exportApplicationServerKey(keys)

      const probe = new TextEncoder().encode('t3p-vapid-selftest')
      const algorithm = { name: 'ECDSA', hash: 'SHA-256' }
      const signature = await crypto.subtle.sign(algorithm, keys.privateKey, probe)
      keyPairValid = await crypto.subtle.verify(algorithm, keys.publicKey, signature, probe)
    }
  } catch (error) {
    console.error('VAPID_KEYS illisible', error)
  }

  // L'adresse de contact voyage dans chaque envoi : l'exposer ici permet de
  // vérifier sa forme (le protocole impose mailto: ou https:) sans envoi réel.
  const subject = vapidSubject(Deno.env.get('VAPID_SUBJECT'))

  return new Response(JSON.stringify({ publicKey, keyPairValid, subject }), {
    status: publicKey ? 200 : 503,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
