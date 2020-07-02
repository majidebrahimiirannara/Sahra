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

self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches
      .match(evt.request)
      .then(res => {
        return res || fetch(evt.request);
      })
      .catch(err => {
        if (evt.request.url.indexOf(".html") > -1) {
          return caches.match("./pages/fallback.html");
        }
      })
  );
});