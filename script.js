var h = document.querySelector(".hour");
var m = document.querySelector(".minute");
var timer = setInterval(() => {
    h.innerText = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
    m.innerText = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
}, 1000);
