let count = 0;
let timerId;

document.getElementById("stopButton").style.display = "none"
document.getElementById("resetButton").style.display = "none"

function startTimer(){
   timerId = setInterval(() => {
        count = count + 1;

        document.getElementById("seconds").innerHTML = count % 60;
        document.getElementById("minutes").innerHTML = parseInt(count / 60) % 60;
        document.getElementById("hours").innerHTML = parseInt(count/3600)
    }, 1000);
    document.getElementById("stopButton").style.display = "block"
    document.getElementById("resetButton").style.display = "block"
    document.getElementById("startButton").style.display = "none"
}

function stopTimer(){
    clearInterval(timerId)
    document.getElementById("startButton").style.display = "block";
    document.getElementById("stopButton").style.display = "none"
}

function resetTimer(){
    count = 0;
    clearInterval(timerId)
    document.getElementById("seconds").innerHTML =0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("startButton").style.display = "block";
    document.getElementById("resetButton").style.display = "none"
}
