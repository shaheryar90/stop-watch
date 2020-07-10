var min = 0;
var sec = 0;
var msec = 0;


var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");


var interval;

function timer() {
    msec++;
    msecHeading.innerHTML = msec;










    if (msec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;


    }
    else if (sec >= 60) {
        min++;
        sec = 0;
        minHeading.innerHTML = min;

    }
}



function start() {
    interval = setInterval(timer, 10);
    btn.setAttribute("disabled", true)
    btn1.removeAttribute("disabled", true)
    btn2.removeAttribute("disabled", true)

}
function stop() {
    clearInterval(interval)
    btn1.setAttribute("disabled", true);
    btn.removeAttribute("disabled", true)
}
function reset() {
    min = 00;
    sec = 00;
    msec = 00;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop()
    btn2.setAttribute("disabled", true)
    btn.removeAttribute("disabled", true)

}
