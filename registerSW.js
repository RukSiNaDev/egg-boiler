if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/egg-boiler/sw.js', { scope: '/egg-boiler/' })})}