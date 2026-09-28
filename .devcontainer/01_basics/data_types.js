"use strict";// means treat my whole code as new version js 
//alert(8) -> cant use bcoz we are using node js and not browser
// ecma script for global standards  use tc39 and mdn by mozilla
// symbol for finding uniqueness
// casting from string to num
const x = Number("322") // undefined = Nan null =0
let num = 100
console.log(typeof (num+""))
// === strict check also checks the data type ex-> "2"===2 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId) 
// non primtive -> reference type ->{Array,object,function}
 // array 

 let food = ["biryani","briyani","chicken","protein"]
 console.log(food);
 // object has key value pairs
 let myobj =
 { name : "akshat",
    age : 50
 }
 console.log(myobj);
 const myfun = function greet(){
        console.log("shabba khair")
 }
 let bignumber = 123456789n
 console.log(typeof bignumber);

 // stack meh primitive type
 // heap meh non-primitive type
 // string interpolation
 console.log(`hello my name is ${myobj.name.toUpperCase} and age is ${myobj.age}`);
 
 
 