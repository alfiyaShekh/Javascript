// There are two ways to form objects using literals & using constuctor(singleton[object.create])

//  ** object literal **

const symbol=Symbol("key") // symbol is type of primitive datatype

const user={
    name:"alfiya",
    age:19,
    location:"ajara",
    isLoggedIn:true,
    "dept name":"CO",
    [symbol]:"mykey" //declaring symbol in object

}

// console.log(user);
// console.log(user.name);
// console.log(user["dept name"]);
// console.log(user["age"]);
// console.log(typeof user[symbol]); // to access symbol added in object

user.isLoggedIn=false // changing value of object
//console.log(user);

 //Object.freeze(user) // freezing object so its value won't change if we try to change
 user.location="Pune"
 //console.log(user);

 

 // ** Adding function to Object ** 

 user.greeting=function(){
    console.log("Hello JS User !!");
    
 }
 //console.log(user.greeting);
 //console.log(user.greeting());
 
 user.greet=function(){
    console.log(`Hii alfiya ur age is ${this.age}`); // this keyword is used to refer properties of same object
    
 }
 console.log(user.greet());


 
 
 
 

