const num = Math.round(Math.random()*100+1)

let submit = document.querySelector('#submit');
let input = document.querySelector('#guessfield')
let guessslot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastresult')
let low_hi = document.querySelector('.low-hi')
let startover = document.querySelector('.res')

const p = document.createElement('p')

let prevguess =[];
let playgame =true;
let numguess =1;

if(playgame){
   const res= submit.addEventListener('click',(e)=>{
    e.preventDefault();
   guess= parseInt(input.value)
   isv(guess)
   })
}

function isv (guess){
    if(guess<=0 || guess>100 || isNaN(guess)){
        alert('please enter a valid no.')
    }
    else{
        prevguess.push(guess);
        if(numguess>10){
            displayguess(guess)
            displaymsg(`game over the num was ${num}`)
            endgame()
        }
        else{
            
        }
    }
}
 isv(submit)

