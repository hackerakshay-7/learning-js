// objects can be declared by two ways -> by literals and by constructors
// literals se banaya toh singleton nahi banta hai aur constructor se bnwaya toh singleton bnta hai
// object literals
const mysymbol = Symbol("Key1")
urobj = {
    name : "bihari babu",
    age : 90,
    [mysymbol]: "keyof1",
    lastlogindays : ["monday","adorable"],
    islogged:true
};
console.log(urobj.islogged);
console.log(urobj["age"]);
console.log(urobj[mysymbol]);
Object.freeze(urobj["name"]) // cant be changed further

let obj1 = { 1:'a',2:'b',3:'c'}
let obj2={4:'r',5:'t',6:'o'};

let obj3 = Object.assign({},obj1,obj2) // the empty object is where these new objects will be copied
// the curly braces are not mandate
obj3 = {...obj1,...obj2}
console.log(obj3);
// object.keys , object.values(obj)

// --------------------------------------------------------------------------------------------

// DESTRUCTURING OF OBJECT
let myyobj = {
    name:"akshat",
    branch: " cse",
    tear : 4
}
// shorthand
let {name :naam} = myyobj
console.log(naam)


