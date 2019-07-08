;
const CACHE_NAME='v1_cache_calendario_epidemiologicoINS',
urlsToCache=[
    './',
    './libs/bootstrap-4.3.1-dist/css/bootstrap.min.css',
    './css/print.css',
    './script.js',
    './js/calendarioIngresaFecha.js',
    './js/obtenerFecha.js',
    './img/ins_logo.png',
    './img/favicon.ico',
    './img/icon1024.png',
    './img/icon512.png',
    './img/icon384.png',
    './img/icon256.png',
    './img/icon192.png',
    './img/icon128.png',
    './img/icon96.png',
    './img/icon64.png',
    './img/icon32.png',
    './libs/moment.min.js',
    './libs/bootstrap-4.3.1-dist/js/bootstrap.min.js',
    './libs/bootstrap-4.3.1-dist/js/bootstrap.bundle.min.js',
    './libs/jsPDF-1.3.2/dist/jspdf.min.js',
    './libs/html2canvas.min.js',
    './libs/html2pdf.js-master/dist/html2pdf.bundle.min.js'
]
//durante la fase de instalación generalmente se almacena en cache los archivos estaticos
self.addEventListener('install',e=>{
e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache=>{
        return cache.addAll(urlsToCache)
        .then(()=>self.skipWaiting())
    })
    .catch(err=>console.log('Falló registro de caché',err))

)
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
//cuando se pierde la conexión, se activa este elemento buscando los elementos en cache
self.addEventListener('activate',e=>{
    const cacheWhiteList=[CACHE_NAME]
    e.waitUntil(
        caches.keys()
        .then(cachesNames=>{

            cachesNames.map(cacheName=>{
                //eliminamos lo que ya no se necesita en el cache
                if(cacheWhiteList.indexOf(cacheName)=== -1){
                    return caches.delete(cacheName)
                }

            })
        })
        //le indica al SW activar el cache actual
        .then(()=>self.clients.claim())

    )
    
})

//cuando el navegador recupera una URL
//cuando haya conexión a internet, va a recuperar los archivos, y detecta si hay cambios entre la versión del server y el cahce
self.addEventListener('fetch',e=>{
    //responde ya sea con el objeto en cache o continuar y buscar la url real
    e.respondWith(
        caches.match(e.request)
        .then(res=>{
            if(res){
                //recuperar del cache
                return res
            }
            //recuperar de la petición url
            return fetch(e.request)
        })
    )
})

