let searchArea = document.getElementById("search-field");
let searchButton = document.getElementById("submit");
let C_temp = document.getElementById("celcius");
let F_temp = document.getElementById("temp_f");
let Condition = document.getElementById("condition");
let cityStateCountry = document.getElementById("cityInfo");
let city;

searchButton.addEventListener("click", async function () {
  city = searchArea.value;
  let url = `https://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city}`;
  let rawData = await fetch(url)
    let response = await rawData.json();
      C_temp.textContent = Math.round(response["current"]["temp_c"]);
      F_temp.textContent = Math.round(response["current"]["temp_f"]);
      Condition.textContent = response["current"]["condition"]["text"];
      cityStateCountry.textContent = `${response["location"]["name"]}, ${response["location"]["region"]}, ${response["location"]["country"]}`;
    });

// setTimeout(function(){}, timeInMs) -> clearTimeout
// setInterval(function(){}, timeInMs) -> make sure to provide an exit condition -> clearInterval
// callback -> A function inside of a function is our callback

// setTimeout(function () {
//   console.log("One");
//   setTimeout(function () {
//     console.log("two");
//     setTimeout(function () {
//       console.log("Three");
//       setTimeout(function () {
//         console.log("Four");
//       },1000)
//     }, 1000);
//   }, 1000);
// }, 1000);
// Callback Hell || Pyramid of Doom

// Promises -> new Promise(function(resolve, reject) {}) -> .then(function(){}).catch(function(){}).finally(function(){})
// let url = "http://jsonplaceholder.typicode.com/users"
// Fetch -> fetch(url)

// async/await -> It is created on top of promises only.
// The purpose of async/await is to write my async code in such a way that it look like a sync command

// 1 await -> going to eliminate 1 .then case
// async await

// --> Writing with async await case
// async function fetchAPI(url) {
//   let raw = await fetch(url);
//   let response = await raw.json(); // raw.json() is async. And over here we have to wait for this to get the data
//   console.log(response);
// }
// fetchAPI("http://jsonplaceholder.typicode.com/users");

// --> Writing with .then().catch() case
// fetch(url)
//   .then((rawData) => {
//     return rawData.json();
//   })
//   .then((response) => {
//     console.log(response);
//   });

// 58 -> fetch(url) -> return me some data, which is from my url
// for the first await, we cannot use await alone, we have to use async aswell.


