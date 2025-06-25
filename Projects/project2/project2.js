const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
     const weight=parseInt(document.querySelector('#weight').value)
     const res=document.querySelector('.result')

     if(height===" " || height<0 || isNaN(height))
     {
        res.innerHTML=`Give valid height ${height}`
     }
     else if(weight===" " || weight<0 || isNaN(weight))
     {
        res.innerHTML=`Give valid weight ${weight}`
     }
     else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        
        if(bmi<18.6){
            res.innerHTML=`${bmi} <br>  BMI is underweight`
        }
        else if(bmi>=18.6 && bmi<=24.9){
            res.innerHTML=`${bmi} <br> BMI is in noraml range`
        }
        else{
            res.innerHTML=`${bmi} <br> BMI is overwight`
        }
     }

})