// Copying an Object
let obj = {};
obj.name = "tisha";
obj.year = 2018;
obj.speak = function () {
  return "My Name is " + this.name + " and this is year " + this.year;
};
let newObj = obj;
obj.year = 2019;
console.log(newObj.year);
console.log(newObj.speak());
console.log("\n");

// assign() method
let copyObject = Object.assign({}, newObj);
copyObject.name = "priya";
console.log(copyObject.speak());
console.log(newObj.speak());
// Look at this example
let sourceObject = { name: "Ridhi", country: { name: "brazil" } };
let shallowCopyObj = Object.assign({}, sourceObject);
shallowCopyObj.country.name = "India";
console.log(sourceObject);
console.log("\n");

// Deep Copy
let deepCopyObj = JSON.parse(JSON.stringify(obj));
console.log(deepCopyObj);
console.log("\n");

// Object.create()
let createObj = Object.create(obj);
console.log(createObj);
createObj.name = "fensi";
console.log(createObj.speak());
console.log("\n");

// Object.entries()
let person = { name: "radhi", age: 30 };
let entries = Object.entries(person);
console.log(entries);
console.log("\n");

// Object.keys()
let keys = Object.keys(person);
console.log(keys);
console.log("\n");

// Object.values()
let values = Object.values(person);
console.log(values);
console.log("\n");

// Object.freeze()
let frozenObject = Object.freeze(person);
frozenObject.name = "vishwa";
console.log(frozenObject);
console.log("\n");
