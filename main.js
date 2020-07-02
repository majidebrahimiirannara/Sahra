
if (navigator.serviceWorker) {
navigator.serviceWorker.register('/service-worker.js')
 .then(function(registration) {
   // Successful registration
   console.log('successful, scope is:', registration.scope);
 })
 .catch(function(err) {
   // Failed
   console.log('Whoops, error:', error);
});
}
