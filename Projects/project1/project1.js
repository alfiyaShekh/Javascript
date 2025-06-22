const btn=document.querySelectorAll('.colors')
const body=document.querySelector('body')

console.log(btn);

btn.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        e.preventDefault()
        body.style.backgroundColor=e.target.id
    })
})