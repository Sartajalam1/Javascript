// for of
//  ["","",""] Array and Object Specific  loor  that is called for OfflineAudioCompletionEvent,
// [{},{},{},{}] // Object 

// const arr = [1,2,3,4,5]
// for(const num of arr){
//     console.log(num);
// }

const greetings = "Hello Sartaj"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

const map = new Map();
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr', " France");
map.set('IN',"India") // Map me same type data nahi dal sakte hai, why:- Map is a Unique Function 
// console.log(map)

for(const [key, value] of map){
    // console.log(key, ':-',value)
}

// for of loop is par nahi kam karega:
const myObject = {
    'Game1': 'NFS',
    'game2': 'spiderman',
    game3: 'superHero'
}
for(const [key,value] of myObject){
    // console.log(key,':-',value);
}
