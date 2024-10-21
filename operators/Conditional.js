function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));

console.log(getFee(false));

console.log(getFee(null));

console.log("\n");

// Handling null values
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" }));
console.log(greeting(null));
