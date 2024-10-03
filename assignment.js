// Addition assignment (+=)
let a = 2;
let b = "hello";

console.log((a += 3)); // Addition

console.log((b += " world")); // Concatenation
console.log("\n");

// Subtraction assignment(-=)
let a1 = 2;
console.log((a1 -= 3));

console.log((a1 -= "Hello"));
console.log("\n");

// Multiplication assignment (*=)
let a3 = 2;
console.log((a3 *= 3));

console.log((a3 *= "hello"));
console.log("\n");

// Division assignment (/=)
let a4 = 3;

a /= 2;
console.log(a4);

a /= 0;
console.log(a4);

a /= "hello";
console.log(a4);
console.log("\n");

// Remainder assignment (%=)
let a5 = 3;

console.log((a5 %= 2));

console.log((a5 %= 0));

console.log((a5 %= "hello"));
console.log("\n");

// Exponentiation assignment (**=)
let a6 = 3;

console.log((a6 **= 2));

console.log((a6 **= 0));

console.log((a6 **= "hello"));
console.log("\n");

// Left shift assignment (<<=)
let a7 = 5;

a7 <<= 2;

console.log(a);
console.log("\n");

// Right shift assignment (>>=)
let a8 = 5;
a8 >>= 2;
console.log(a8);

let b1 = -5;
b1 >>= 2;
console.log(b1);
console.log("\n");

// Unsigned right shift assignment (>>>=)
let a9 = 5;

a9 >>>= 2;
console.log(a9);

let b3 = -5;
b3 >>>= 2;
console.log(b3);
console.log("\n");

// Bitwise AND assignment (&=)
let a10 = 5;
a10 &= 3;

console.log(a10);

// Bitwise XOR assignment (^=)
let a11 = 5;
a11 ^= 3;

console.log(a11);
console.log("\n");

// Bitwise OR assignment (|=)
let a12 = 5;
a12 |= 3;

console.log(a12);
console.log("\n");

// Logical AND assignment (&&=)
let a13 = 1;
let b4 = 0;

a13 &&= 2;
console.log(a13);

b4 &&= 2;
console.log(b4);
console.log("\n");

// Logical OR assignment (||=)
const a14 = { duration: 50, title: "" };

a14.duration ||= 10;
console.log(a14.duration);

a14.title ||= "title is empty.";
console.log(a14.title);
console.log("\n");

// Nullish coalescing assignment (??=)
const a15 = { duration: 50 };

a15.speed ??= 25;
console.log(a.speed);

a15.duration ??= 10;
console.log(a.duration);
console.log("\n");
