// global scope
let a=10
var b=50
const c=90
console.log(a,b,c);



//blk scope
if(true){
    let a=12
    var x=34
    const y=90
    console.log(a);
    
}
console.log(x); // will not give error so avoid using var 
console.log(z); // error
console.log(y); //error



