// fetching url info with async
async function getAllUsers() {
    try{
        const response=fetch("https://jsonplaceholder.typicode.com/users")
        //console.log(response);
        
       const data =await response.json()
       console.log(data);
    
    }
    catch(error){
        console.log(error);
        
    }
   
    
}
getAllUsers()


//using then-catch-finally
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
 return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
 console.log(error);
 
})
.finally(()=>{
    console.log("executed");
    
})