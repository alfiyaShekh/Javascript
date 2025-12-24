const submit=document.querySelector('.submit')
const cal=document.querySelector('.calculate')

let amount=0

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const expenseName=document.querySelector('#expense').value
    const amt=document.querySelector('#value').value
    const del=document.querySelector('.delete')


    if(expenseName==="" || amt===""){
        // del.innerHTML="Enter Expesense name and amount"
        alert("Enter Expesense name and amount")
        return false
    }

    const examt=Number(amt)
    amount=amount+examt

    cal.innerHTML=amount

    const addExpense=document.createElement('div')
    addExpense.style.height="40px"
    addExpense.style.width="100%"
    addExpense.style.margin="5px"
    // addExpense.style.backgroundColor="red"
    addExpense.style.display="flex"
    addExpense.style.justifyContent="space-evenly"


    const expensedel=document.createElement('h3')
    expensedel.innerHTML=expenseName + " -₹ " + amt
    addExpense.appendChild(expensedel)
    
     const deleteExpense=document.createElement('button')
     deleteExpense.innerHTML="Delete"
     deleteExpense.style.backgroundColor="blueviolet"
     deleteExpense.style.color="white"
     deleteExpense.style.borderRadius="7px"
     deleteExpense.style.border="none"
     deleteExpense.style.fontSize="15px"
     

     addExpense.appendChild(deleteExpense)

    

    deleteExpense.addEventListener('click',(e)=>{
        amount=amount-examt
        cal.innerHTML=amount
        addExpense.remove()
    })
    del.appendChild(addExpense)

})
 