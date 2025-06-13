 const lan=["php","Java"]
 const lan2=["css","JS"]

lan.push(lan2)
 console.log(lan); /* when we push one array into another the pushed array will become single added element into first array
                      rather than merging all the elements into single array ( o/p => [ 'php', 'Java', [ 'css', 'JS' ]] ) */
 console.log(lan[2][0]); //accessing elements of pushed array

 // concat
 const a=[1,2,3]
 const b=[4,5,6]
 const c=b.concat(a) //combines two or more arrays and returns new array
 console.log(c);

 //spread operator (...)
const car=["tesla","alto"]
const bike=["Honda","KTM"]
console.log(...car,...bike); //spread individual element of arrays


// flat =>combines all array elements into single array when we have nested array 
const food=["pizza","burger",["tea","milk"],["cake",["icecream","pasta"]]]
const foodArr=food.flat(2)  // 2=>depth or provide infinity to depth value(flat(infinity) 
console.log(foodArr);

// isArray => for checking the specified array is present or not returns true or false
console.log(Array.isArray(food));
console.log(Array.isArray("alfiya"));

// from =>used to form an array with  giiven string
console.log(Array.from("afliya")); 
console.log(Array.from({name:"maaj"}));

// of =>  form an array using set of elements
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
 




 


 
  