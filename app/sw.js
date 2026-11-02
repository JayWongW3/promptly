/*
  Service worker: lets Promptly open offline and be installed as an app.
  Strategy: always try the network first (so learners get the newest lessons),
  and fall back to the saved copy when offline.
  If you add a new file the app needs, add it to APP_FILES below.
*/
const CACHE = "promptly-v4";
const APP_FILES = [
  "./",
  "index.html",
  "styles.css",
  "config.js",
  "analytics.js",
  "sounds.js",
  "app.js",
  "manifest.webmanifest",
  "courses/beginner.js",
  "courses/advanced.js",
  "courses/business.js",
  "courses/developer.js",
  "courses/claude.js",
  "courses/chatgpt.js",
  "courses/grok.js",
  "data/spotlight.js",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const req = event.request;
  // Only handle this app's own files. GitHub, analytics etc. go straight to the network.
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match("index.html")))
  );
});
