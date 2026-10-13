 new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('jhak ass Async task');
        resolve()
    },1000)
 }).then(()=>{
    console.log('Async 2 resolved');
    
 })