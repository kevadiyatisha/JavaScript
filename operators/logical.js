// Logical AND (&&)
const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
console.log("\n");

// Logical OR (||)
const a1 = 3;
const b1 = -2;

console.log(a1 > 0 || b1 > 0);
console.log("\n");

//Nullish coalescing operator (??)
const foo = null ?? "default string";
console.log(foo);

const baz = 0 ?? 42;
console.log(baz);
console.log("\n");

// Logical NOT (!)
const a2 = 3;
const b2 = -2;

console.log(!(a2 > 0 || b2 > 0));
console.log("\n");
