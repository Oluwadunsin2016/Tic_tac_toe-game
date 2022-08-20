const ticTacToe = "tic-tac-toe";
const assets = [
  "/",
  "/login.html",
  "/html/opponent.html",
  "/html/board.html",
  "/html/registration.html",
  "/css/style.css",
  "/css/popup.css",
  "/css/log.css",
  "/js/app.js",
  "/js/popup.js",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(ticTacToe).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
