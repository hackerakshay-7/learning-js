let num = new Number(100);
console.log(num)
console.log(num.toFixed(1));
console.log(num.toPrecision(2))
const commasep = 1000000;
console.log(commasep.toLocaleString("en-IN"))
let date = new Date();
console.log(date.toLocaleString());
let mydate = new Date(2026,0,10)
console.log(mydate.toDateString());
console.log(Date.now()); // in miliseconds
let mymonth = new Date();
console.log(mymonth.getMonth())
console.log(mymonth.getDay())



