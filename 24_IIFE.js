// IIFE :: Immediatly Invoked Function Expression 
// IIFE used to call the function immedialty and also used to avoid global scope pollution

//This is named IIFE
 (function chai(){
    console.log("Hello JS user");
    
 })(); //  () used to make blk of function and () is used for its execution add semicolon at the end to avoid error


// Arrow function with IIFE
 (()=>{
    console.log("Hello alfiya !! ");
    
 })();


 // passing variable to IIFE 
 // This is unamed IIFE
 ((name)=>{
    console.log(`Passing variable ${name}`);
    
 })("alfiya");