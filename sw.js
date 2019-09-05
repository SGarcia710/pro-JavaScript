const VERSION = "v1"

self.addEventListener('install', event => {
  event.waitUntil(precache())
});

self.addEventListener('fetch', event => {
  const request = event.request;
  //solo se hará algo con los get
  if(request.method !== "GET"){
    return;
  }

  // buscar en el cache a ver si ya tenemos lo que se está solicitando
  event.respondWith(cachedResponse(request));;

  //Actualizar el cache
  event.waitUntil(updateCache(request));

});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',
  ])
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request); //Le preguntamos al cache si ya tiene una copia de lo que se pide por request
  return response || fetch(request); //En caso que se solicite y el cache no tiene lo solicitado, toca mandar el fetch comúnn y corriente
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response) //Con esto se añaden nuevos items al cache
}