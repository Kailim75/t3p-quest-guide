/* eslint-disable no-undef */
/**
 * Gestion des notifications push.
 *
 * Ce fichier est importé par le service worker généré par Workbox
 * (vite.config.ts → workbox.importScripts). Il n'est pas transpilé :
 * on reste en JavaScript simple, sans import ni syntaxe TypeScript.
 */

self.addEventListener('push', (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch {
    payload = { body: event.data ? event.data.text() : '' };
  }

  const title = payload.title || 'Quiz T3P';
  const options = {
    body: payload.body || 'Votre entraînement vous attend.',
    icon: '/pwa-192x192.png',
    badge: '/pwa-192x192.png',
    // Une notification de rappel remplace la précédente au lieu de s'empiler.
    tag: payload.tag || 't3p-rappel',
    renotify: true,
    data: { url: payload.url || '/' },
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const target = new URL(event.notification.data?.url || '/', self.location.origin).href;

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      // Si l'application est déjà ouverte, on la met au premier plan
      // plutôt que d'ouvrir une seconde fenêtre.
      for (const client of clients) {
        if (client.url === target && 'focus' in client) return client.focus();
      }
      return self.clients.openWindow(target);
    })
  );
});
