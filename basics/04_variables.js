const accountId=123
let email="alfiya@gmail.com"
var pass="1234" //  prefer not to use var coz of issue in blk scope 
city="pune"
let state // undefined var declaration
let val=null; // null value assigned

// accountId=34 //not allowed
console.log(accountId);

email="abc@gmail.com"
console.log(email);

pass="2345"
console.log(pass);

city="mumbai"
console.log(city);

console.table([accountId,email,pass,city,state,val]) //print variables in tabular format

