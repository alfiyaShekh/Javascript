// nested scope

function one(){
    const user="alfiya"
    function two(){
        const lastname="shekh"
        console.log(user);
        console.log(lastname); // can access parent function property
        
    }
    //console.log(lastname); //can't access child function property
    two()
}
//one()
//two() // can't access child function outside of parent function



if(true){
    const username="alfiya"
    if(username==="alfiya"){
        const sirname="shekh"
        console.log(username+" "+sirname);
        
    }
    //console.log(sirname); // not accessible coz of blk scope
    
}
//console.log(username); // not accessible coz it's scope is within that blk


console.log(addone(5));
function addone(num){
    return num+1
}



//addtwo(5)
// variable function will give error if called before its function definition
 const addtwo=function(num){
    console.log(num+2);
}


score=0 // in js 0,"",null,undefined are considered as false
if(score){
    console.log("Pass");
    
}
else{
    console.log("Fail");
    
}