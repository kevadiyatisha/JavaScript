// // JavaScript Array Methods
// //1.map()
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const mapped = arr.map((element) => element + 30);
// console.log(mapped);
// console.log("\n");

// // 2.filter()
// const filtered = arr.filter((element) => element === 2 || element === 4);
// console.log(filtered);
// console.log("\n");

// // 3.sort()
// const alphabet = ["f", "a", "c", "v", "z"];
// descend = arr.sort((a, b) => (a > b ? -1 : 1));
// console.log(descend);
// ascend = alphabet.sort((a, b) => (a > b ? 1 : -1));
// console.log(ascend);
// console.log("\n");

// // 4.foreach()
// const a1 = [1, 2, 3];
// a1.forEach((element) => {
//   console.log(element);
// });
// console.log("\n");

// // 5. concat()
// const a2 = ["a", "b", "c"];
// const a3 = ["d", "e", "f"];
// console.log(a1.concat(a2));
// console.log(a1);
// console.log(a2);
// console.log("\n");

// // 6.every()
// const greaterfive = arr.every((num) => num > 5);
// console.log(greaterfive);
// const lessnine = arr.every((num) => num < 9);
// console.log(lessnine);
// console.log("\n");

// // 7.some()
// const greaterNum = arr.some((num) => num > 5);
// console.log(greaterNum);
// const lessNum = arr.some((num) => num <= 0);
// console.log(lessNum);
// console.log("\n");

// // 8.includes()
// // console.log(arr.includes(2));
// // console.log(arr.includdes(7));
// // console.log("\n");

// // 9.join()
// const arr1 = ["m", "a", "n", "d", "e", "e", "p"];
// console.log(arr1.join(""));
// console.log("\n");

// // 10.reduce()
// const reduced = arr.reduce((total, current) => total + current);
// console.log(reduced);
// console.log("\n");

// // 11.find()
// const found = arr.find((element) => element > 5);
// console.log(found);
// console.log("\n");

// 12.findindex()
const arr2 = ["tisha", "ridhi", "ridhi", "prisha"];
const indexFinder1 = arr2.findIndex((element) => element === "ridhi");
console.log(indexFinder1);
console.log("\n");

// 13.indexof()
const indexFinder = arr2.indexOf("ridhi");
console.log(indexFinder);
console.log("\n");

// // 14.fill()
// const arr3 = new Array(3);
// console.log(arr3);
// console.log(arr3.fill(10));
// console.log("\n");

// // 15.slice()
// const arr4 = ["a", "b", "c", "d", "e"];
// const sliced = arr4.slice(2, 4);
// console.log(sliced);
// console.log(arr4);
// console.log("\n");

// // 16.reverse()
// a1.reverse();
// console.log(a1);
// console.log("\n");

// // 17.push()
// const fruits = ["apple", "peach"];
// console.log(fruits.push("banana"));
// console.log(fruits);
// console.log("\n");

// // 18.pop()
// fruits.pop();
// console.log(fruits);
// console.log("\n");

// // 19.shift()
// fruits.shift();
// console.log(fruits);
// console.log("\n");

// // 20.unshift()
// console.log(fruits.unshift("banana"));
// console.log(fruits);
// console.log("\n");
