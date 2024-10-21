// Creating a new WeakSet
const weakSet = new WeakSet();

// Creating some objects to add to the WeakSet
const obj1 = { id: 1 };
const obj2 = { id: 2 };
const obj3 = { id: 3 };

// Adding objects to the WeakSet
weakSet.add(obj1);
weakSet.add(obj2);
weakSet.add(obj3);

// Checking if an object exists in the WeakSet
console.log(weakSet.has(obj1)); // Output: true
console.log(weakSet.has(obj2)); // Output: true
console.log(weakSet.has(obj3)); // Output: true

// Deleting an object from the WeakSet
weakSet.delete(obj2);

// Checking if the deleted object still exists
console.log(weakSet.has(obj2)); // Output: false
