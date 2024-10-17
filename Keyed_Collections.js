// Creating a new WeakMap
const weakMap = new WeakMap();

// Creating objects to use as keys
const user1 = { id: 1 };
const user2 = { id: 2 };

// Setting key-value pairs in the WeakMap
weakMap.set(user1, "John");
weakMap.set(user2, "Alice");

// Retrieving values from the WeakMap
console.log(weakMap.get(user1)); // Output: John
console.log(weakMap.get(user2)); // Output: Alice

// Deleting a key-value pair from the WeakMap
weakMap.delete(user1);

// Trying to retrieve the value after deletion
console.log(weakMap.get(user1)); // Output: undefined
