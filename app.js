document.getElementById('ping').addEventListener("click",function(){

    document.getElementById('out').textContent="JS is working";
})

//Service file 
//Runs in the background,separate from the main page
//Offline permance,overall perfonmance, push notifications

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js')
    .then(()=>console.log('Service worker registered'))
    .catch(err=> console.log('SW registration failed', err))
}