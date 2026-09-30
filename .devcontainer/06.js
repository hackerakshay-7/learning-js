const mynums =[1,2,3,4,5,6,7,8,9];
mynum =mynums.filter(
    (num)=> num>4
) // it is like for each but it returns some value
console.log(mynum);
// explicit return => agar arrow fun meh {} use nahi krnge toh apne aap return 
const users = [
  { name: 'Zack', age: 17, verified: true },
  { name: 'Alice', age: 32, verified: true },
  { name: 'Bob', age: 70, verified: true },
  { name: 'Charlie', age: 25, verified: false }, // Should be filtered out
  { name: 'David', age: 14, verified: true }
];

const userz = users.filter((item)=>{return !item.verified})
console.log(userz);

let tt = mynums.map( (val)=> val+10 ) // filter only selects true values
console.log(tt);
// reduce function
let a = [1,2,3]
const b = a.reduce(function(acc,currentval){
    console.log(`value of acc ${acc} and currval${currentval}`)
    return currentval+acc
},0) // 0 is value of accumalator

console.log(b);

let operation = [
    {
        name : "akshat",
        price : 5000
    },
    {
        name : "akshat",
        price : 2000
    },
    {
        name : "akshat",
        price : 4000
    },
]

sum = operation.reduce( (acc,currval)=> acc+currval.price ,0)

console.log(sum);

 
