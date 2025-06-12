let score=100.000
// console.log(score);


let balance=new Number(50000)
// console.log(balance);
// console.log(typeof balance.toString()); // convert number ro string


let num=194.78
// console.log(num.toFixed(1)); // decide precision 
// console.log(num.toPrecision(3));

let num2=1000000
// console.log(num2.toLocaleString()); // applay commas in zeros in US standarda to improve readability
// console.log(num2.toLocaleString('en-IN')); // applay commas in zeros in indian standarda to improve readability


// ** MATH Library ** //

// console.log(Math);

// console.log(Math.abs(-2)); // returns absolute values of number
// console.log(Math.round(23.16)); //rounds number 
// console.log(Math.ceil(4.2)); // top value
// console.log(Math.floor(4.9)); //lower value      
// console.log(Math.sqrt(25)); // returns square root of number
// console.log(Math.pow(2,3)); //returns power raised to base
// console.log(Math.min(9,0,3)); //returns minimum number
// console.log(Math.max(0,7,2)); //returns maximum number


// console.log(Math.random()); // generates random number
// console.log(Math.random()*10); // shifts decimal points
// console.log((Math.random()*10)+1); // +1 to avoid number 0 if generated

const min=1
const max=100
console.log(Math.floor(Math.random()*(max-min+1)));  //Formula to get output in range of given min and max val
console.log(Math.floor(Math.random()*(max-min+1))+min); // It will generates the number between the range but number genearted will be minimum to min  











