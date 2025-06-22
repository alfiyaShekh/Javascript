const btn=document.querySelectorAll('.colors')
const body=document.querySelector('body')

console.log(btn);

// btn.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click',function(e){
       
//         e.preventDefault()
//         body.style.backgroundColor=e.target.id
//     })
// })


btn.forEach(function(button){
    button.addEventListener('click',function(e){
        const color=e.target.id
        switch(color){
            case 'red':
            case 'yellow':
            case "blue":
            case 'orange':
                body.style.backgroundColor=color
                break;
            default:alert("Enter on boxes to change color")
            break;
        }
    })
})