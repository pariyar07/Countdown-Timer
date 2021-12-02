const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minsEl = document.querySelector('#mins');
const secondsEl = document.querySelector('#seconds');

let toDate = "2 Jan 2022";

function countdown() {
    const futureDate = new Date(toDate);
    const currentDate = new Date();

    const totalSeconds = (futureDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = timeFormat(hours);
    minsEl.innerHTML = timeFormat(mins);
    secondsEl .innerHTML = timeFormat(seconds);  
}

function timeFormat(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000);