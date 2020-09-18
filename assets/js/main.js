var photos = [
    'url("../assets/img/main%20images/saxophone4k.jpg")',
    'url("../assets/img/main%20images/saxophone-main.jpg")',
    'url("../assets/img/main%20images/saxophoneBlurred.jpg")',
    'url("../assets/img/main%20images/trumpet.jpg")',
    'url("../assets/img/main%20images/trumpet-2717460.jpg")',
    'url("../assets/img/main%20images/clarinet.jpg")',
    'url("../assets/img/main%20images/clarinet 2.jpg")',

]
setInterval(
    function () {
        document.getElementById('bg-image').style.backgroundImage = photos[Math.floor(Math.random() * photos.length)];
    }, 5000
)
// this is a commend because the github is bugged and it doens't let me push even tho I made some changes
