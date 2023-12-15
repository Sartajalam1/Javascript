//  for in loop
// for in loop  Object par lag sakte hai
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'

}
for(const key in myObject){
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

// for in loop Array par bhi laga sakte hai
const programming = ["js","rb","py","java","cpp"]

for(const key in programming){
    // console.log(programming[key])
}

// Is par for in loop nahi laga sakte  map me,
const map = new Map();
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr', " France");
map.set('IN',"India") // Map me same type data nahi dal sakte hai, why:- Map is a Unique Function 
// console.log(map)

for(const key in map){
    console.log(key)
}
