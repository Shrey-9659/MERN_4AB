// setInterval
// Whenever we want to execute something again and again after a particular interval of time, we use setInterval in that case.
// syntax --> setInterval(function(){}, timeInMs)


let heading = document.getElementById("text-area");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timer;
let count = 1;
let isMyTimerActive = false;


// I want to create a setInterval, which will change the value of count
// after every execution, and display that on my screen
start.addEventListener("click", function(){
    if(isMyTimerActive == true){
        return;
    }
    // heading.textContent = "Timer : " + count
    timer = setInterval(function(){
        heading.textContent = `Timer : ${count}`
        // count = count + 1;
        count++;
    }, 1000)
    isMyTimerActive = true
})


stop.addEventListener("click", function(){
    clearInterval(timer)
    isMyTimerActive = false
})


reset.addEventListener("click", function(){
    clearInterval(timer)
    count = 1;
    heading.textContent = "Timer"
    isMyTimerActive = false
})
