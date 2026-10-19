function square(num){
    return num**2
}
square.powerpuff = 5;
console.log(square(5));
console.log(square.prototype);
console.log(square.powerpuff);

function user(username , score){
    this.username = username
    this.score = score
}
user.prototype.iincrement = function(){
    this.score++;
}

const chai = new user('akshat' , 28); // cretaing object of a function freakin cool right
chai.iincrement()
console.log(chai.score);

 obj1 = {
    hero : 'akshat',
    zero : ' chowmein',
    def : function(){ console.log(`the super hero is ${hero}`);
    }

 }

 Object.prototype.akshat = function aks(){ console.log("akshat is present in all objects");
 }

 obj1.akshat();




