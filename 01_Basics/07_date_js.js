// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate)

// Specific Date Declare // Apane se koi date create krna ho to

// let myCreateDate = new Date(2023, 10, 5);
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2023, 9, 5, 10, 5)
// console.log(myCreateDate.toLocaleDateString());

// let myCreateDate = new Date("2023-10-5");
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("01-14-2023");

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

newDate.toLocaleString('default' ,{
    weekday: "long",
})
