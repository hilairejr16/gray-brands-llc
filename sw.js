/* Gray Brands LLC — Service Worker
   CACHE_NAME: bump version string whenever CSS or JS changes */
const CACHE_NAME = 'gray-brands-v1.1.0';

const PRECACHE = [
  '/',
  '/index.html',
  '/shop.html',
  '/product.html',
  '/cart.html',
  '/blog.html',
  '/community.html',
  '/about.html',
  '/contact.html',
  '/css/style.css',
  '/js/main.js',
  '/js/products.js',
  '/logo.svg',
  '/logo-light.svg',
  '/logo-icon.svg',
  '/favicon.svg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
