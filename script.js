if('serviceWorker' in navigator){
    //registramos service worker
    navigator.serviceWorker.register('./sw.js')
    .then(reg=>console.log('Registro de Service Worker Existoso',reg))
    .catch(err=>console.warn('Error al registrar Service Worker',err))
}