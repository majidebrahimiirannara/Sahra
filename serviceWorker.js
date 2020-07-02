const staticCacheName = "site-static-v1";
const cacheAssets = [
  '/',
  '/index.html',
  '/13990408ResetSession.css',
  '/jquery-2.2.4.min.js',
  '/favicon.ico',
  '/wwb12.min.js'
];
self.addEventListener("install", evt => {
  evt.waitUntil(
    caches
      .open(staticCacheName)
      .then(cache => {
        console.log("caching assets...");
        cache.addAll(cacheAssets);
      })
      .catch(err => {})
  );
});
/*
self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});



self.addEventListener('activate', () => {
  console.log('SW2 Active');
});
*/