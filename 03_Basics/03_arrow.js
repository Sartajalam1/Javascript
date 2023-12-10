const user = {
    username: "sartaj",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "sartaj"
    
//     console.log(this.username)

// }
// chai();

// const chai = function(){
//     let username = "sartaj"
//     console.log(this.username)

// }
// chai()

// const chai = () =>{
//     let username = "sartaj"
//     console.log(this.username)

// }
// chai()

// Arrow Function in details
 // curly me Brackets me Retun likhna padega
// simple Arrow Function
// const addTwo = (num1,num2) => {
//     return num1 + num2

// }
//  console.log(addTwo(3,6))

// implicit function return, upper wale function ko modify kiya hai 
//  Prenthisis likhege to return nahi likhan padega
// const addTwo = (num1,num2) =>  (num1 + num2) 


// object return in this Arrow
const addTwo = (num1,num2) =>  ({username:"sartaj"})
 console.log(addTwo(3,6))

