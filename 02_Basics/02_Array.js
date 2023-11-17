const bolly_Heros = ["Sharukh", "Salman", "Amir", "kartik"];
const dc_heros = ["superman", "Avengers","Loki"];

// bolly_Heros.push(dc_heros);

// console.log(bolly_Heros);
// console.log(bolly_Heros[2]);

// bolly_Heros.concat(dc_heros);
// const allHeros = bolly_Heros.concat(dc_heros)
// console.log(allHeros);

//Spread operators
// const all_new_heros = [...bolly_Heros, ...dc_heros]
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("Sartaj"));
console.log(Array.from("Sartaj"));
console.log(Array.from({name:"Sartaj"})) //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
