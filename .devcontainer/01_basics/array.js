let arr1 = ["shubham", "karoti", "kalyanam"]
let arr2 = ["aarogyam", "sukhsampadam"]
console.log(arr1.concat(arr2));
// diff bw slice and spice is spice modifies the array
const all_new_heroes = [...arr1 , ...arr2] // spread operator
console.log(all_new_heroes)
console.log(Array.from("akshat")) 
// this cant convert objects ie key value pairs into arr
let one = 100;
let two = 200;
let three = 300;
console.log(Array.of(one,two,three)); // returns a new array

