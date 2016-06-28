if (window.showAds) {
    // Your user has no adblocker, good for them
    document.getElementById('status').innerHTML = 'No Adblocker detected.'
} else {
    // You user uses adbocker, do something here
    document.getElementById('status').innerHTML = 'You have Adblocker!'
}