// for

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log(`5 is best number`);
//     }
//     console.log(element)
    
    
// }
 // table print 
// for(let i = 0; i<=10; i++){
//     console.log(`Outer loop value: ${i}`);
//     for(let j = 0; j<=10; j++ ){
//         console.log(i + '*' + j + ' = ' + i*j );
//     }
// }

// Array in for loop
// let myArray = ["sartaj" , "sagar", "sohan"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// break, continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     // const element = array[index];
//     console.log(`value of i is ${index}`)
// }
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    // const element = array[index];
    console.log(`value of i is ${index}`)
}
