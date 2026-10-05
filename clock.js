const clock =document.getElementById('#clock');
//setInterval(function(){},1000ms) syntax
setInterval(function(){
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
},1000)