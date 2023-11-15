 const name = "sartaj";
const repoCount = 79

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sartaj-alam')
console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))

console.log(gameName.indexOf('m'))
const newString = gameName.substring(0,4);
console.log(newString);

const anotherString =  gameName.slice(-1, 4)
console.log(anotherString);

const newStringOne = "   sartaj   "
console.log(newStringOne)
console.log(newStringOne.trim());// space remove kar deta hai, white space par hi kam karta hai

const url = " https://tc39.es/ecma262/ ";
console.log(url.replace('%20','-'));

console.log(url.includes('tc'));

console.log(gameName.split('-'));

