function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function sum(a,b){
    return a + b;
}

module.exports = {random, sum}
