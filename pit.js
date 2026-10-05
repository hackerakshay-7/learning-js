let form = document.querySelector('form')

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    const height = parseFloat(document.querySelector('#height').value)
     const weight = parseFloat(document.querySelector('#weight').value)
     const result = document.querySelector('#result')

     if(height<0 || isNaN(height) || height===''){
        result.innerHTML = ' please enter valid height'
     }
      if(weight<0 || isNaN(weight) || weight===''){
        result.innerHTML = ' please enter valid weight'
     }
     else{
        result.innerHTML =(weight/((height*height)/10000)).toFixed(2);
     }
})