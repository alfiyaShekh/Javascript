// falsy values
const userEmail =""
if(userEmail){
    //console.log("User have email");
    
}
else{
    console.log("user don't have email");
    
}

/* falsy values : values which are assumed as false without comparison in control flow
1) false
2) 0 (zero) , -0(neg zero)
3) BigInt 0n
4) ""
5) null,undefined , NaN */





const val=[]
if(val){
    //console.log("ok");
    
}

/*truthy values : values which are assumed as true without comparison in control flow
1) true
2) []
3) " " (truty becoz it contains space)
4) "0" ,'false' ( it is truthy val coz return as string)
5) function(){} :: empty function 
*/ 

// if condition while object is empty
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    //console.log("objct is empty");
    
}

// Nullish Coalescing Operator (??): null undefined  ( used while handling database)
let val1
//val1 = 5 ??10
//val1=null ?? 10 
//val1= undefined ?? 10
//val1 = null ?? 10 ?? 15
//val1=null ?? undefined
//val1 = undefined ?? 10 ?? 15
console.log(val1);


// ************ ternary oprator (? :) **********
const a=10
const b=20
a>b ? console.log("a is greater"):console.log("b is greater");



