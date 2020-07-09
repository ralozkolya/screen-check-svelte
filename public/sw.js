self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('screen-check').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/build/bundle.css',
       '/build/bundle.js',
       '/font/fontello.eot',
       '/font/fontello.svg#fontello',
       '/font/fontello.ttf',
       '/font/fontello.woff',
       '/font/fontello.woff2',
       '/manifest.webmanifest',
       '/img/favicon.png',
       '/img/logo.png',
       '/img/logo-512.png',
       '/img/logo-192.png',
     ]);
   })
 );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request);
        })
    );
});
