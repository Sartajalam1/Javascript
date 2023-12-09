// singleton :- constructor se banega to singleton,
// letral se singleton nahi banta hai,

// object literals

const mysym = Symbol("key1");
const jsUser = {
  name: "sartaj",
  "Full name": "Sartaj Alam",
  [mysym]: "myKey1",
  age: 18,
  location: "chennai",
  email: "sartaj62@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"],
};
jsUser.email = "sagar62@gmail.com";
// Object.freeze(jsUser)
jsUser.email = "sagar379@gmailcom";
// object access
// console.log(jsUser.email)

// This is right way Access Object
// console.log( jsUser[mysym])
// console.log(jsUser["email"])
// console.log(jsUser["Full name"])
// console.log(jsUser)

jsUser.greeting = function () {
  console.log("Hello Moto Alam");
};

jsUser.greetingTwo = function () {
  console.log(`Hello Js user ${this.name}`);
};
console.log(jsUser.greeting());

console.log(jsUser.greetingTwo());
