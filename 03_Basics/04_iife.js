// immediately invoked function Expressions (IIFE)

// named iife 
(function chai(){
    console.log(`DB CONNECTED`)
})();

// unnamed iife
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})(`sartaj`)
