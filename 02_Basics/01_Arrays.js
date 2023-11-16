// Array
const myArr = [0,1,2,3,4,5];
let myHeros = ["Sharukh khan","Salman Khan"]
// console.log(myArr); 
// console.log(myArr[3]);
// console.log(myHeros);

// Arrays Method

// myArr.push(7);
// myArr.push(8);
// myArr.pop(7);

// myArr.unshift(4)
// myArr.shift();

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(8));

// const newArr = myArr.join();
// console.log(typeof newArr);
// console.log(myArr);

// slice , splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(0,1,3);
console.log("C", myArr);
console.log(myn2);

