/* NUMBER CONVERSION */
let score=50
console.log(typeof(score)); // number

let name="alfiya"
console.log(typeof name); //string
console.log(Number(name)); // returns NaN


let num="60a"
let numscore=Number(num)
console.log(typeof(numscore));
console.log(numscore); //NaN(not a number)


let val=null
let num1=Number(val) // when null value is converted to number it returns 0
console.log(num1);

let val2=undefined
let num2=Number(val2) //when undefined value is converted to number it returns NaN
console.log(num2);
// "20" =>20
// "20aa" =>Nan
// true =>1 , false=> 0




/* BOOLEAN CONVERSION */
let logged=1
let notLogged=0
console.log(Boolean(logged));
console.log(Boolean(notLogged));
// 1 => true
// 0 => false
// " " => false
// "abc" => true



/* STRING CONVERSION */
let a=30
let b=String(a)
console.log(b);
console.log(typeof(b));


