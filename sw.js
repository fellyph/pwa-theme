
var CACHE_VERSION = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/about-us/',
  '/contact-us/',
  '/wp-content/themes/pwa-theme/dist/main.css',
  '/wp-content/themes/pwa-theme/dist/bundle.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});








