const form=document.querySelector('form')
const body=document.querySelector('body')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const text=document.querySelector('#task').value 
    const add=document.querySelector('.displaytask')
    
    const task=document.createElement('div')
    task.style.marginTop='20px'
   task.style.backgroundColor="pink"
   task.style.padding='5px'
   task.style.borderRadius='10px'
  task.innerHTML=text
  task.style.fontSize='25px'

    const done=document.createElement('button')
    done.innerHTML="Done"
    done.style.fontSize='15px'
    done.style.marginLeft='90px'

     const del=document.createElement('button')
     del.innerHTML="Remove"
    del.style.fontSize='15px'
    del.style.marginLeft='10px'

    task.appendChild(done)
    task.appendChild(del)
    
    done.addEventListener('click',function(){
        task.style.textDecoration = "line-through";
    })

    del.addEventListener('click',function(){
        task.remove()
    })
    
    add.appendChild(task)
    
})


