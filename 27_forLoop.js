// ** for loop **
for(let i=1;i<=10;i++){
  //console.log(i);
  
}


for(let i=1;i<=10;i++){
    if(i==5){
       // console.log("5 is odd number");
        
    }
  //console.log(i);
  
}


// ** nesting of loop **
for(let i=1;i<=2;i++){
    //console.log("outer loop");
    for(let j=0;j<=2;j++){
       // console.log("Inner loop");
        
    }
    
}


// ** printing table of number **
// for(let i=2;i<=2;i++){
//     console.log("Table of ",i);
//     for(let j=1;j<=10;j++){
//         console.log(i*j);
        
//     }
// }

// ** Printing table of 1 to 10 numbers **
// for(let i=1;i<=10;i++){
//     console.log();
//     console.log(`Table of ${i}`);
//     for(let j=1;j<=10;j++){
//         console.log(`${i} * ${j} =`,i*j);
        
//     }
// }


// ** array with for loop **
let arr=["JS","React","Node Js","Tailwind"]
console.log(`Length of array is ${arr.length}`);
for(let i=0;i<arr.length;i++){
    //console.log(arr[i]);
    
}


// ** break **
let arr1=["JS","React","Node Js","Tailwind"]
console.log(`Length of array is ${arr.length}`);
for(let i=0;i<arr.length;i++){
    
    if(arr1[i]=="React")
        break;
    console.log(arr1[i]);
    
}

for(let i=1;i<=10;i++){
    if(i==5){
        console.log("5 is detected");
        break;}
    console.log(i);
    
}


// ** continue **
for(let i=1;i<10;i++){
    if(i==5){
        continue}
    console.log(i);
    
}