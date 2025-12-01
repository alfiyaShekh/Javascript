 //generate random color
const randomColor=function(){
    const hex='0123456789ABCDEF'; // to get value from 0 to 16
    let color="#"; //hex color starts from #
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)] //generates a random number from 0 to 16 and tyen index value from hex is return hex[0] → '0',hex[10] → 'A'
        console.log(color);
        
    }
    return color;
    
    
};

const changeColor=function(){
    document.querySelector('body').style.backgroundColor=randomColor()
}

document.getElementById('start').addEventListener('click',
    function(){
      change= setInterval(changeColor,1000)
    }
)

document.getElementById('stop').addEventListener('click',function(){
    clearInterval(change)
})
