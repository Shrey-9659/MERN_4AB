// Fetch
// Fetch is a JS function which always returns us a promise
// Handle that result of fetch with the help of .then and .catch

// Way to get the data from the certain api

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(rawData){
//     // console.log(rawData.json()) //Sync task
//     return rawData.json();
// })
// .then((res)=>{
//     console.log(res)
// })
let searchArea = document.getElementById("search-field")
let searchButton = document.getElementById("submit")
let C_temp = document.getElementById("celcius")
let F_temp = document.getElementById("temp_f")
let Condition = document.getElementById("condition")
let cityStateCountry = document.getElementById("cityInfo")
let city;

searchButton.addEventListener("click", function(){
    city = searchArea.value
    let url = `https://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city}`
    fetch(url).then((rawData)=>{
        return rawData.json();
    }).then((response)=>{
        C_temp.textContent = Math.round(response["current"]["temp_c"])
        F_temp.textContent = Math.round(response["current"]["temp_f"])
        Condition.textContent = response["current"]["condition"]["text"]
        cityStateCountry.textContent = `${response["location"]["name"]}, ${response["location"]["region"]}, ${response["location"]["country"]}`
        // console.log(response)
        // console.log(response["current"]["temp_c"])
        // console.log(response["current"]["temp_f"])
        // console.log(response["current"]["condition"]["text"])
    })
})
