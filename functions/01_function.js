function vars(){
    console.log("A");
    console.log("L");
    console.log("F");
    console.log("I");
    console.log("Y");
    console.log("A");
    
}
//vars()


function add(x,y) // x and y are called parameters
{
    console.log(x+y);
    
}
//add(6,7)  // 6 and 7 are called arguments
//console.log(add('4','5'));



function multiply(a,b){
    res=a*b
    //return res

     // OR 
    return a*b
}
//console.log("result: ",multiply(7,8));




function username(user){
    return `Hello ${user}`
}
//console.log(username("alfiya"));




function user(username) // to avoid undefined result is user does not pass any val we can use username="abc"
{
    if(username===undefined) // blk to be executed if argument is not passed
        {
        console.log("enter username");
        return
    }
    return `${username} just logged in` 
}
console.log(user()); // if argumnet is not passed simply it will return undefined




// variale function
const divide=function(a,b){
    return a/b;
}
console.log(divide(6,3));
