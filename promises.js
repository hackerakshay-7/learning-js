 new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('jhak ass Async task');
        resolve()
    },1000)
 }).then(()=>{
    console.log('Async 2 resolved');
    
 })

 const promisethree = new Promise((resolve,reject)=>{
      setTimeout(()=>{
         resolve({username :'akshat' , jaati :'bihari'})
      },2000)
 })
 promisethree.then(
   function(user){
      console.log(user);
   }
 )

 const promisefour = new Promise(function(resolve,reject){
   setTimeout(()=>{
      let error = false;
      if(!error){
         resolve({parameter1 :' nibba' , para2 : ' nibbi'} )
      }
      else{
         reject('s o met hing went W RoN G')
      }
   },500)  
 })
 promisefour.then((user)=>{
   console.log(user);
   return user.para2;
 }).then(
   (para)=>{
      console.log(para);
   }
 ).catch(
   (err)=>{
      console.log(err);
        
   }
 ).finally(
   ()=>{
      console.log(' promise yatoh resolve hua hai ya reject');
      
   }
 )

 async function consumep4(){
   try {
         const response = await promisefour
         console.log(response);
         
   } catch (error) {
      console.log(error);
      
   }
 }


 async function getallusers(){
      try {
            const response = await fetch('https://api.github.com/users/hackerakshay-7') // using await here coz like db calls and network calls fetch also takes fractions of seconds to respond
               const data = await response.json();
               console.log(data);
               
         } catch (error) {
         console.log('E :' , error);
         
      }
 }
  getallusers();
