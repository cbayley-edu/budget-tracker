const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/favicon.png',
  '/manifest.webmanifest',
  '/service-worker.js',
  '/index.js',
  '/style.css',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/dist/bundle.js',
  '/dist/manifest.json',
  '/dist/assets/icons/icon_96x96.png',
  '/dist/assets/icons/icon_128x128.png',
  '/dist/assets/icons/icon_144x144.png',
  '/dist/assets/icons/icon_152x152.png',
  '/dist/assets/icons/icon_192x192.png',
  '/dist/assets/icons/icon_384x384.png',
  '/dist/assets/icons/icon_512x512.png'
];

// install
self.addEventListener("install", function (evt) {
    // pre cache all static assets
    evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('Files pre-cached.');
        cache.addAll(FILES_TO_CACHE)
      })
      
    );
  
    // tell the browser to activate this service worker immediately once it
    // has finished installing
    self.skipWaiting();
  });

  self.addEventListener("activate", function(evt) {
    evt.waitUntil(
      caches.keys().then(keyList => {
        return Promise.all(
          keyList.map(key => {
            if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
              console.log("Removing old cache data", key);
              return caches.delete(key);
            }
          })
        );
      })
    );
  
    self.clients.claim();
  });

  //fetch
  self.addEventListener('fetch', function(evt) {
      if (evt.request.url.includes("/api/")) {
        evt.respondWith(
          caches.open(DATA_CACHE_NAME).then(cache => {
            return fetch(evt.request)
              .then(response => {
                // If the response was good, clone it and store it in the cache.
                if (response.status === 200) {
                  cache.put(evt.request, response.clone());
                  //cache.put(evt.request.url, response.clone());
                }
    
                return response;
              })
              .catch(err => {
                // Network request failed, try to get it from the cache.
                return cache.match(evt.request);
              });
          })
          .catch(err => console.log(err))
        );
      } else {
      evt.respondWith(
        caches.open(CACHE_NAME).then(cache => {
          return cache.match(evt.request).then(response => {
            return response || fetch(evt.request);
          });
        })
      );
    }
  });