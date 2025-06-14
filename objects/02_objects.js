// singletone declaration

const user=new Object()
console.log(user);

user.id=1223
user.name="alfiya"
user.email="abc@gmail.com"
user.age=19
//console.log(user);


// nesting of objects
const regular={
    email:"xyz@gmail.com",
    fullname:{
        fname:"alfiya",
        middel:"sameer",
        lname:"shekh"
    }
}
// console.log(regular);
// console.log(regular.fullname.middel);


const obj={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={...obj,...obj2} 
console.log(obj3);// spread opearator used to combine two objects

const obj4= Object.assign({},obj,obj2)   /* here {} act as target and all the values of obj,obj2 are stored 
                                          in that {} and all act as source ,it is optional but synatatically looks good */
console.log(obj4);
 

/* object opration when values came from database ,when values 
   came from database it came in form of arrays wrapped within objects */
const users=[
    {id:1,email:"abc@gmail.com"},
     {id:2,email:"xyz@gmail.com"},
      {id:3,email:"pqr@gmail.com"}
]
console.log(users[1].email);



const tinderuser={
    id:123,
    name:"abc",
    email:"abcd@gmail.com"
}
console.log(Object.keys(tinderuser)); // to return keys of object
console.log(Object.values(tinderuser)); // to return values of object
console.log(Object.entries(tinderuser));  //key-value pair is turned into array
console.log(tinderuser.hasOwnProperty('id')); // to check whether object have that property or not to avoid crashes
console.log(tinderuser.hasOwnProperty('isLoggedIn'));



