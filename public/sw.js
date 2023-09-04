
const nameCache = "ape-v2"
const files = [
    "/public/",
    "/public/index.html",
    "/public/assets/images/bg-sidebar-desktop.svg",
    "/public/assets/images/bg-sidebar-mobile.svg",
    "/public/assets/icons/Icon_x48.png",
    "/public/assets/icons/Icon_x72.png",
    "/public/assets/icons/Icon_x96.png",
    "/public/assets/icons/Icon_x128.png",
    "/public/assets/icons/Icon_x192.png",
    "/public/assets/icons/Icon_x384.png",
    "/public/assets/icons/Icon_x512.png",
    "/public/assets/img/favicon-32x32.png",
    "/public/assets/img/icon-advanced.svg",
    "/public/assets/img/icon-arcade.svg",
    "/public/assets/img/icon-checkmark.svg",
    "/public/assets/img/icon-pro.svg",
    "/public/assets/img/icon-thank-you.svg",
    "/public/build/css/app.css",
    "/public/build/js/ape.js",
    "/public/build/js/app.js",
    "/public/build/js/botones.js",
    "/public/build/js/step1.js",
    "/public/build/js/step2.js",
    "/public/build/js/step3.js",
    "/public/build/js/step4.js",
    "/public/build/js/step5.js",
    "/public/build/js/utilidades.js",
    "/public/manifest.json",
    "/public/sw.js"
] 

self.addEventListener("install", e => {

    e.waitUntil(
        caches.open(nameCache)
            .then( cache => {
                console.log("cacheando...");
                cache.addAll(files)
            })
    );
});

self.addEventListener("activate", e => {
    e.waitUntil(
        caches.keys()
            .then( keys => {
                // console.log(keys);

                return Promise.all(
                    keys.filter( key => key !== nameCache )
                        .map( key => caches.delete(key)) // Borra las versiones anteriores
                )
            })
    )
});

self.addEventListener("fetch", e => {
    
    e.respondWith(
        caches.match(e.request)
            .then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('/public/error.html')))
    )
})