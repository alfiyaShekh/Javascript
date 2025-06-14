
//passing multiple arguments in function
function calculateCartPrice(...num) // here ... is rest operator not spread
{
    return num
}
console.log(calculateCartPrice(400,500,600));



function calculate(num1,num2,...num) 
{
    return num
}
console.log(calculate(400,500,600,700,900)); // here num1=400,num2=500 and rest will be stored in num 



// passing object in function
const user={
    id:123,
    name:"abc"
}
function handleObject(anyobj){
    console.log(`Id is ${anyobj.id} and name is ${anyobj.name}`);
    
}
handleObject(user)

//directly passing object without declaring using variable
handleObject({
    id:678,
    name:"xyz"
})

// passing array to function
const arr=[5,6,7]

function passingArray(arr){
    console.log(arr[0]);
}
passingArray(arr)
passingArray([0,6,5]) // directly passing array
