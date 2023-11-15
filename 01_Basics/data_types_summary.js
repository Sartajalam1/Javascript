//  Primitive data types

 // 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt

 const score = 100;
 const scoreValue = 100.3;

 const isLoggedIn = false
 const outsideTemp = null;
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id === anotherId);

 const bigNumber = 1213213234343n;

//  Non Primitive / reference

//Array, Objects, Functions
 const heros = ["Krish", "Flyingjat","Ra-one"];

 let myObj = {
    name: "sartaj",
    age: 22,
 }

 const myFunction = function(){
    console.log("Hello world")
 }

 console.log(typeof(myFunction));

// https://tc39.es/ecma262/  // check website For javascript......

/*****************************************************************/

// stack (primitive), Heap (Non-primitive)

let myWebsite = "sartajalam"
let anothername = myWebsite;

anothername = "sagarkhan"

console.log(myWebsite)
console.log(anothername)

let userOne = {
   email:"user@youtubecom",
   upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "sartaj62@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);
