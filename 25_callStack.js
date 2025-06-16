// how the excution of program is done in JS
//consider following code to understand the execution of program 

let var1=2;
let var2=3
function add(num1,num2){
    let total=num1+num2
    return total
}
let result =add(var1,var2)
let result2 =add(5,6)



/* first step of program execution starts with global execution context

step 1:: GLOBAL EXECUTION / GOBAL ENVIROMANT 
global execution is allocated in this keyword

step 2:: MEMORY PHASE == all variables are collected and they are assigned as undefined
var1 => undefined //line 4
var2 => undefined // line 5
add => function definition is stored //from line 6 to 8
result => undefined  // line 9
result2 => undefined  // line 10


step 3 :: EXECUTION PHASE 
var1 = 2
var2 = 3 

line 10 :: addnum(var1,var2) =>  
                      _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
                     |                            |
                     | new varibale enviroment +  |  
                     | execution thread           | ==> when the box process is done then it will be deleted
                     |_ _ _ _ _ _ _ _ _ _ _ _ _ _ | 

whenever function is called above process is done and in this box again memory phase and ececution phase is repeated for that function
    so, var1=> undefined
    var2=> undefined
    total=> undefined

    then execution phase,
    num1 => 2
    num2 => 3
    total =>5 the total will return in global execution context

    whenever line 11 is executed again this line 9 process will get executed
*/