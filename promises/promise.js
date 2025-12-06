
// //promise is an object 
// // Creating promises

// const promiseOne=new Promise(function(resolve,reject){
//      // Do an async task like DB calls,cryptography,network
//      setTimeout(function(){
//         console.log("Aysnc task completed");
//         resolve() // now it connected to then()
//      },1000)
// }) 

// //consuming promises
// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })





// // here the promise is not hold in variable 
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Aysnc task 2 completed");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("promise 2 consumed");
    
// })



// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//        resolve({username:"chai",email:"chai@123.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//  console.log(user);
 
// })




/*
Creates a Promise
Waits 1 second
Checks error
Because error = true, it rejects
.then() blocks are skipped
.catch() runs and logs the error */
const promiseFour=new Promise(function(resolve,reject){
 setTimeout(function(){
    let error=true
    if(!error){
        resolve({username:"hitesh",password:"123"})
    }
    else{
        reject('ERROR:somthing went wrong')
    }
 },1000)

})
//chaining of then
promiseFour
.then((user)=>{
  console.log(user);
  return user.username
  
}).then((username)=>{
  console.log(username);
  
}).catch(function(error){
console.log(error);

}).finally(function(){
  console.log("Promise is either resolve or rejected");
  
})



// these code can be replaced with then-catch 
const promiseFive=new Promise((resolve,reject)=>{
      setTimeout(function(){
    let error=true
    if(!error){
        resolve({username:"JS",password:"123"})
    }
    else{
        reject('ERROR:JS went wrong')
    }
 },1000)
})

async function consumePromiseFive() {
  try {
    const response=await promiseFive
  console.log(response);
  } catch (error) {
    console.log(error);
    
  }
}
consumePromiseFive()