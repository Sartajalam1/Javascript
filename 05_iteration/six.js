// const coding = ['js','ruby','java','python','cpp']
// //  forEach nothing return any value, it is not return type
// const values = coding.forEach((item)=>{
//     // console.log(item)
//     return item;
// })

// console.log(values);

//  Filter start 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//if used curly brackets then write return, curly not used then don't write return;
// const newNums = myNums.filter((num)=> {  
// return num > 7})

// console.log(newNums);

// const newNums = []

// myNums.forEach((num)=>{
//     if(num > 9){
//         newNums.push(taj)
//     }
// })

// console.log(newNums);

const books = [
    {
        title:'Java',genre:'Fiction',publish:1981, edition:2004,
    },
    {
        title:'Python',genre:'Non-Fiction',publish:1991, edition:2014,
    },
    {
        title:'Book History',genre:'History',publish:1995, edition:2012,
    },
    {
        title:'Book Geography',genre:'Geography',publish:1990, edition:2008,
    },
    {
        title:'Physics',genre:'R.K.Singh',publish:1999, edition:2010,
    },
    {
        title:'Chemistry',genre:'PhysicsWala',publish:2015, edition:2016,
    },
    {
        title:'Mathematics',genre:'Calculation',publish:1984, edition:2019,
    }
];

const userBooks = books.filter((bk)=> bk.genre === 'Calculation')
const user = books.filter((bk)=>{return bk.publish >= 1995 && bk.genre === 'History'});
// console.log(userBooks)
console.log(user)
