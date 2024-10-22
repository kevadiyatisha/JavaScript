// Strict equality using ===
const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

// Loose equality using ==
const num1 = 0;
const big = 0n;
const str1 = "0";
const obj1 = new String("0");

console.log(num1 == str1); // true
console.log(big == num1); // true
console.log(str1 == big); // true

console.log(num1 == obj1); // true
console.log(big == obj1); // true
console.log(str1 == obj1); // true
