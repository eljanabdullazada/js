let timer;
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let display = document.getElementById('timer');

function startTimer() {
    let hours = parseInt(hoursInput.value || 0);
    let minutes = parseInt(minutesInput.value || 0);
    let seconds = parseInt(secondsInput.value || 0);

    let totalTime = hours * 3600 + minutes * 60 + seconds;

    if (totalTime <= 0 || isNaN(totalTime)) {
        return;
    }

    timer = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(timer);
            display.textContent = '00:00:00';
            return;
        }

        totalTime--;

        let h = Math.floor(totalTime / 3600);
        let m = Math.floor((totalTime % 3600) / 60);
        let s = totalTime % 60;

        h = h < 10 ? `0${h}` : h;
        m = m < 10 ? `0${m}` : m;
        s = s < 10 ? `0${s}` : s;

        display.textContent = `${h}:${m}:${s}`;
    }, 1000);
}


function resetTimer() {
    clearInterval(timer);
    display.textContent = '00:00:00';
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
}
