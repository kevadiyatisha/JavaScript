const arr = ["1", 6, "apple", 0, null, "test"];
const mapped = arr.map((element) => `${element}`);
console.log(mapped);
console.log("\n");

// 2.filter()
const filtered = arr.filter((element) => element !== "test");
console.log(filtered);
console.log("\n");

// 3.sort()
// descend = arr.sort((a, b) => (a > b ? -1 : 1));
// console.log(descend);
// ascend = alphabet.sort((a, b) => (a > b ? 1 : -1));
// console.log(ascend);

// 4.foreach()
arr.forEach((element) => {
  console.log(element);
});
console.log("\n");

// 5. concat()
const a2 = ["hello"];
console.log(arr.concat(a2));
console.log("\n");

// 6.every()
// boolan value define
const greaterone = arr.every((num) => num > 1);
console.log(greaterone, "uiuiuiu");
const lessten = arr.every((num) => num < 10);
console.log(lessten);
console.log("\n");

// 7.some()
// boolan value define
const greaterNum = arr.some((num) => num > 5);
console.log(greaterNum);
const lessNum = arr.some((num) => num <= 0);
console.log(lessNum);
console.log("\n");

// 8.includes()
// boolan value define
console.log(arr.includes(1));
console.log("\n");

// 9.join()
console.log(arr.join());
console.log("\n");

// 10.reduce()
const reduced = arr.reduce((total, current) => total + current);
console.log(reduced);
console.log("\n");

// 11.find()
const found = arr.find((element) => element > apple);
console.log(found);
console.log("\n");

// 12.findindex()
const indexFinder1 = arr.findIndex((element) => element === "test");
console.log(indexFinder1);
console.log("\n");

// 13.indexof()
const indexFinder = arr.indexOf("apple");
console.log(indexFinder);
console.log("\n");

// 14.fill()
const arr1 = new Array(3);
console.log(arr);
console.log(arr1.fill(10));
console.log("\n");

// 15.slice()
const sliced = arr.slice(2, 4);
console.log(sliced);
console.log(arr);
console.log("\n");

// 16.reverse()
arr.reverse();
console.log(arr);
console.log("\n");

// 17.push()
console.log(arr.push("1000"));
console.log(arr);
console.log("\n");

//  18.pop()
arr.pop();
console.log(arr);
console.log("\n");

// 19.shift()
arr.shift();
console.log(arr);
console.log("\n");

// 20.unshift()
console.log(arr.unshift("500"));
console.log(arr);
console.log("\n");
