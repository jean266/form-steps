
if(navigator.serviceWorker) {
    navigator.serviceWorker
      .register('./sw.js')
      .then(registered => console.log('Successfully installed', registered))
      .catch(console.error)
} else {
    console.log("Service Worker not supported");
}