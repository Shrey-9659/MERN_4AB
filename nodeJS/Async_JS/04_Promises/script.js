// What are promises ->
// In this assignment you will be scoring 90%
// Async code ->

// new Promise();

// 3 states in promises
// -> Pending
// -> Resolved -> .then
// -> Rejected -> .catch
// -> Settled -> .finally
// -----------------------------------------------------------------------------------------------------------------------

// let promise = new Promise(function(resolve, reject){
//     let error = true;
//     if(error == false){
//         console.log("There is no error")
//         return resolve()
//     } else{
//         console.log("There is an error")
//         return reject()
//     }
// })

// promise.then(function(){
//     console.log("I am coming from resolve function")
// }).catch(function(){
//     console.log("I am coming from reject function")
// }).finally(function(){
//     console.log("No matter the promise is resolved or rejected, I will run in both the scenario")
// })

// -----------------------------------------------------------------------------------------------------------------------

// new Promise(function(resolve, reject){
//     let error = true;
//     if(error == false){
//         console.log("There is no error")
//         return resolve()
//     } else{
//         console.log("There is an error")
//         return reject()
//     }
// }).then(function(){
//     console.log("Resolved successfully")
// }).catch(function(){
//     console.log("Rejected successfully")
// })

// -----------------------------------------------------------------------------------------------------------------------

// let newPromise = new Promise(function(resolve, reject){
//     let error = true;
//     if(error == false){
//         console.log("There is no error")
//         return resolve("I am resolved")
//     } else{
//         console.log("There is an error")
//         return reject("I am rejected")
//     }
// })

// newPromise
// .then(function(res){
//     console.log(res)
// })
// .catch(function(err){
//     console.log(err)
// })

// -----------------------------------------------------------------------------------------------------------------------

// --Write the Async Code
// setTimeout
// setInterval
// Promises
// Fetch
// Axios
// XMLHttpRequest

// To handle that result which we will receive from the async code 
// callbacks
// .then .catch
// try catch
// Async/Await

// -----------------------------------------------------------------------------------------------------------------------

// Promise Chaining

// I will go to univ
// I will open up my laptop
// I will complete the assignment
// I will be marked accordingly

// let P1 = new Promise(function(resolve, reject) {
//     setTimeout(()=>{
//         resolve()
//         console.log("I will go to univ")
//     }, 1000)
// })

// let P2 = P1.then(function(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("I will open up my laptop")
//             resolve()
//         }, 2000)
//     })
// })

// let P3 = P2.then((res, rej)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("I will complete the assignment")
//             resolve()
//         }, 2000)
//     })
// })

// P3.then(()=>{
//     console.log("Task 3 completed")
// })