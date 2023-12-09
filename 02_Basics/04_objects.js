// const tinderUser = new Object() // This is singlton object
const tinderUser = {}; // Non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "sambahadur";
tinderUser.age = 22;
tinderUser.isLoggedIn = false;
tinderUser.password = "1234BR@";
tinderUser.MobileNumber = 7664049463;
tinderUser.isLoggedOut = true;
tinderUser.connection = "All user connect";

// console.log(tinderUser)

const instagram = {
  email: "sartajalam54@gmail.com",
  password: "1233Sdsd34",
  fullname: {
    userfullname: {
      firstname: "sartaj",
      lastName: "alam",
    },
  },
};
// console.log(instagram.fullname);

// Addition of Two object 
const insta = {userId: "sartalam1",userPassword:"sa1234"}
const facebook = {follow:"sagar",unFollow:"suraj"}

// const Add = { insta, facebook }
// const Add = Object.assign({} ,insta,facebook) // Object Assign Method for access object
const Add = {...insta,...facebook} //Spred Method for Access Object 
// console.log(Add);

//Array type of Object
const Users = [
    {id:123,
      name:"sachin"
    },
    {
        passwordUser:"sartaj22",
        followers:"1M",
    },
    {
        connection:"friend",
        joinDate:"08/12/2023"
    }

]
// console.log(Users[2].connection)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // hasOwnProperty to checked this property Availble or Not


 // De-structuring Metthod in javascript.
const course = {
    courseName: "Js in Hindi",
    price:"999",
    courseInstructor: "Hitesh"
}
// course.courseinstructor

const {courseInstructor: instructor} = course
console.log(instructor)

// JSON Method in objects in see below, only this code understanding,
// Json tools :- Link: https://jsonformatter.org/
// website API JSON:- https://randomuser.me/
// {
//   "name": "sartaj alam",
//   "coursename":"Js in Hindi",
//   "Price": "free",
// }
 
// JSON IN Array method ,
// [
//   {},
//   {},
//   {},
// ]

