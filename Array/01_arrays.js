// *** Array *** //

const arr=[0,1,"JS",true,7.8] //decalartion
// console.log(arr);
// console.log(typeof arr); //type is object
// console.log(arr[2]);


// *** Array Methods *** ///


const languages=new Array("Js","Tailwind","React","Nodejs") //declaration using Array Object
console.log(languages);

// Push
languages.push("Typescript") // add specified element at the end of array
languages.push("NextJs")
console.log(languages);

//pop
let removedEle=languages.pop()
console.log(removedEle);
console.log(languages); // removes last element from the array and returns last elemnt

// unshift
languages.unshift("HTML")
console.log(languages); // adds elements at starting of array [0th index]  

//shift
languages.shift()
console.log(languages); // removes first elements of array [0th index]  

// includes
console.log(languages.includes("React")); // return true of false based on element present in array
console.log(languages.includes("CSS"));


// join
let newArr=["PHP","laravel","python","Java"]
console.log(newArr);
let array=newArr.join("#") // returns string of array eleements connected by specified sepearator
console.log(typeof array);


// slice
let arr2=[9,8,7,6,5]
console.log(arr2.slice(1,4));
console.log(arr2);
 //returns sub array from specified index to the element before specified last index and do not manipulate original array

 
// splice
let arr3=[23,24,25,26,27]
console.log(arr3.splice(1,4));
console.log(arr3);
 // retuns sub array from given range and also includes last range element and manipulates original array




 




