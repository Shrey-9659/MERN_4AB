// syntax
// setTimeout(function(){}, timeInMs)
// Wheneven we want to execute to function just once with some delay, in that case we use setTimeout


let heading = document.getElementById("text-area")
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
