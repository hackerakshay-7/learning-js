let body = document.querySelector('body');
let buttons = document.querySelectorAll('.button');

buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        if(event.target.id ==='gray') body.style.backgroundColor=event.target.id;
        if(event.target.id ==='orange') body.style.backgroundColor=event.target.id;
        if(event.target.id ==='black') body.style.backgroundColor=event.target.id;
        if(event.target.id ==='blue') body.style.backgroundColor=event.target.id;
    })
})