// set(key, value):
const weakMap = new WeakMap();
const key = {};
weakMap.set(key, "value");

// get(key):
const weakMap1 = new WeakMap();
const key1 = {};
weakMap.set(key1, "value");
console.log(weakMap1.get(key1));

// has(key):
const weakMap2 = new WeakMap();
const key2 = {};
weakMap.set(key2, "value");
console.log(weakMap2.has(key2));

// delete(key):
const weakMap3 = new WeakMap();
const key3 = {};
weakMap.set(key3, "value");
console.log(weakMap3.delete(key3));
