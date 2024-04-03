"use strict"
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let hrString;
let minString;
let secString;
let countString;

let timer = false;

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopwatch() {
    if (timer == true) {
        count++;
        if (count === 100) {
            sec++;
            count = 0;
        }
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        hrString = hr;
        minString = min;
        secString = sec;
        countString = count;

        if (hr < 10) {
            hrString = "0" + hrString;
            document.getElementById("hr").innerHTML = hrString;
        } else {
            document.getElementById("hr").innerHTML = hr;
        }
        if (min < 10) {
            minString = "0" + minString;
            document.getElementById("min").innerHTML = minString;
        } else {
            document.getElementById("min").innerHTML = min;
        }
        if (sec < 10) {
            secString = "0" + secString;
            document.getElementById("sec").innerHTML = secString;
        } else {
            document.getElementById("sec").innerHTML = sec;
        }
        if (count < 10) {
            countString = "0" + countString;
            document.getElementById("count").innerHTML = countString;
        } else {
            document.getElementById("count").innerHTML = count;
        }
        setTimeout(stopwatch, 10);
    }
}