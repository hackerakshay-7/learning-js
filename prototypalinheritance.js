const user = {
    username : 'akshat'
}
const teacher = {
    lust : 'bihari'
}
// teacher.__proto__ = user;

// console.log(user.lust); // outdated
// MODERN
Object.setPrototypeOf(user,teacher); // user meh teacher ki property
console.log(user.lust);

String.prototype.truelen = function(){
    console.log(this.trim().length);
}
"akshat  ".truelen();

