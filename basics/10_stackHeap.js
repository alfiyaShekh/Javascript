// There are two types of memories - stack(primitice dataypes) & heap(Non-primitice dataypes)

/* 1)stack 
In stack when we assign one varible to another then the copy of original varibale is created , if we change the value of copied 
variable the original variable's value does not change
*/
let name="alfiya"
let another=name
another="shekh"
console.log(another);
console.log(name);


/* 2)Heap 
In Heap, when one variable assigned to original varible both of them points to same refernce in the memory, if change values in 
copied varible then changes will be reflected to original variable as well 
*/
let user={
    position:"manager",
    salary:100000
}
let user2=user
//console.log(user2);

user2.position="CEO";
console.log(user);
console.log(user2);


