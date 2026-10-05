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

