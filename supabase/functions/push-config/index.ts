import * as webpush from 'jsr:@negrel/webpush@0.5.0'

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

  try {
    const exported = JSON.parse(Deno.env.get('VAPID_KEYS') ?? '{}')
    if (exported.publicKey && exported.privateKey) {
      const keys = await webpush.importVapidKeys(exported)
      publicKey = await webpush.exportApplicationServerKey(keys)
    }
  } catch (error) {
    console.error('VAPID_KEYS illisible', error)
  }

  return new Response(JSON.stringify({ publicKey }), {
    status: publicKey ? 200 : 503,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
