//1.for loop
let x = 1;
for (x = 2; x <= 10; x++) {
  console.log("Value of x: " + x);
}
console.log("\n");

//2.while Loop
let y = 1;
while (y < 6) {
  console.log(y);
  y += 1;
}
console.log("\n");

//3.do-while loop
let z = 1;
do {
  console.log(z);
  z++;
} while (z <= 5);
console.log("\n");

//4.for-in Loop
let myObj = { x: 1, y: 2, z: 3 };
for (let key in myObj) {
  console.log(key, myObj[key]);
}
console.log("\n");

//5.for-of Loop
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}
console.log("\n");

//6.Labeled Statement
let sum = 0,
  a = 1;

// Label for outer loop
outerloop: while (true) {
  a = 1;

  // Label for inner loop
  innerloop: while (a < 3) {
    sum += a;
    if (sum > 12) {
      // Break outer loop from inner loop
      break outerloop;
    }
    console.log("sum = " + sum);
    a++;
  }
}
console.log("\n");

//7.Break Statement
for (let i = 1; i < 6; i++) {
  if (i == 4) break;

  console.log(i);
}

//8.Continue Statement
for (let i = 0; i < 11; i++) {
  if (i % 2 == 0) continue;

  console.log(i);
}
console.log("\n");
