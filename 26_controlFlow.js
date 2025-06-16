// ** if **
const age=15
if(age>18){
    //console.log("allowed for voting");
}
//console.log("ok");
    

// ** if-else **
const temp=23
if(temp>20){
    console.log("Greater than 20");
    
}
else{
    console.log("Less than 20");
    
}


// ** scope **
let score=200
if(score>100){
    let power="fly"
    //console.log(`user can ${power}`);
}
//console.log(power); // Error:power not defined coz of scope


// ** if-elseif-else **
const bal=1000
if(bal>=900)
    {console.log("balace is greater than 900");}
else if (bal>=700) {
    console.log("Balance is gretaer than 700");
    
}
else if(bal>=500){
    console.log("Balance is gretaer than 500");
    
} 
else {
   console.log("Balanace less than 500");
    
}

// &&
const userLoggedIn=true
const debitCard=true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}

//  OR 
const loggedFromGoogle=false
const loggedFromEmail=false
const loggedSignUp=true
if(loggedFromEmail || loggedFromGoogle || loggedSignUp){
    console.log("Login successful");
    
}
    
    

// ** switch case **
const month=1
switch(month){
    case 1:console.log("Hello");
           break;
    case 2:console.log("Hii");
           break
    default:console.log("wrong choice");
    break
    
}

const name="abc"
switch(name){
    case "alfiya":console.log("Hello");
           break;
    case "abc":console.log("Hii");
           break
    default:console.log("wrong choice");
    break
    
}


