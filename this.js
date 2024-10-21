//1. Using this in a Method
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};

person.greet();

// 2. Using this in a Function
function greet() {
  console.log("Hello, my name is " + this.name);
}

const person1 = {
  name: "John",
  sayHello: greet,
};

const anotherPerson = {
  name: "Alice",
};

greet();
person.sayHello();
greet.call(anotherPerson);

// 3. Using this alone
console.log(this);
// 4. Implicit Binding
const person2 = {
  name: "ram",
  age: 22,
  greet: function () {
    return `Hello ${this.name}, you are ${this.age} years old`;
  },
};
console.log(person.greet());

// 5. Explicit Binding
function ageVerify() {
  if (this.age > 18) {
    console.log("Yes you can drive");
  } else {
    console.log("No you cannot drive");
  }
}

const per1 = { age: 21 };
const per2 = { age: 16 };
ageVerify.call(per1);
ageVerify.call(per2);

// 6. Default Binding
const age = 22;
function verifyAge() {
  return this.age;
}

console.log(verifyAge());

// 7. Arrow Function Binding
const person3 = {
  name: "ram",
  age: 22,
  greet: () => {
    return `Hello , you are ${this.age} years old`;
  },
};
console.log(person.greet());
console.log(person1);
console.log(person2);
console.log(person3);
