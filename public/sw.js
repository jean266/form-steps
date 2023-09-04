
const nameCache = "ape-v1"
const files = [
    "/public/",
    "/public/index.html"
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

});

self.addEventListener("fetch", e => {
    
    e.respondWith(
        caches.match(e.request)
            .then(cacheResponse => cacheResponse)
    )
})