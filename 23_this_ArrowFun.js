// ** this => used to refer current context **
const user={
    username:"abc",
    price:999,
    welcome:function(){
        console.log(`hello ${this.username} !! welcome to website`);
        console.log(this); // refer whole object
        
    }
}
// console.log(user);
// user.welcome()

user.username="xyz" //changing username 
// user.welcome()
// console.log(user);

//user.welcome()
//console.log(this); // o/p will {} coz here there is no current context referred





function one(){
    let username="abc"
    console.log(this);
    console.log(this.username); //we cannot refer current value in function using this
    
    
}
//one()


const chai=function(){
     let username="abc"
    console.log(this);
    console.log(this.username); 
}
//chai()




// ** arrow function (syntax: () => { function body } **
const add=(a,b)=>{
     console.log(a+b);
     
}
add(7,8)




//implicit return : if we use () for declaring function body then there is no need to write return 
const sub=(x,y) => (x-y) 
sub(6,5)

// explicit return: if we want return statment then we have to use {} (adding return explicitly)
const mul=(x,y) => {return x*y}
sub(6,5)




// this in arrow function 
const language= ()=> {
    let username="abc"
    console.log(this);
    console.log(this.username); 
}
language()


//return object in implicit function
const users=(user)=>( {username:"abc"})
console.log(users());

