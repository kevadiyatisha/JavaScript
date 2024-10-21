//Syncronous programming
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favrite color?");
console.log(a + "is" + b + "years old and has" + c + "favorite color.");

// Asynchronous programming
console.log("start");
setTimeout(function () {
  console.log("hey I am good");
}, 3000);
console.log("End");
