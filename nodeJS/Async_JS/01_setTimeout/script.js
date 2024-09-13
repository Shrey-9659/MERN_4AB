// syntax
// setTimeout(function(){}, timeInMs)
// Wheneven we want to run something after some delay, in that case we can use setTimeout


let heading = document.getElementById("heading")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let timeout;
start.addEventListener("click", function(){
    timeout = setTimeout(function(){
        heading.innerHTML = "Vignan University"
    }, 2000)
})

stop.addEventListener("click", function(){
    clearTimeout(timeout)
})
