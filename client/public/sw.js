// sw.js — Oplyx Service Worker

const CACHE_NAME = "oplyx-cache-v1";
const urlsToCache = [
  "/",
  "/offline.html",
  "/logo192.png",
  "/logo512.png",
  // add other assets if needed
];

// Install SW: pre-cache defined URLs
self.addEventListener("install", (event) => {
  console.log("[ServiceWorker] Install");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Caching essential files");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate SW: remove old caches
self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] Activate");
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: Cache first, then network, then offline fallback
self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] Fetch", event.request.url);
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => caches.match("/offline.html"))
      );
    })
  );
});
