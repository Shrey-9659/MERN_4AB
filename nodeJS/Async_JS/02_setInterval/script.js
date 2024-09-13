// setInterval
// Whenever we want to execute something again and again after a particular interval of time, we use setInterval in that case.
// syntax --> setInterval(function(){}, timeInMs)


let heading = document.getElementById("heading");
let start = document.getElementById("start");
let count = 1;
start.addEventListener("click", function(){
    setInterval(function(){
        heading.textContent = "Timer : " + count
    }, 1000)
})


