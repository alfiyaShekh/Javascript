const insert=document.getElementById('insert')
window.addEventListener('keydownhhj',function(e){
    console.log(e);
    
   insert.innerHTML=`
   <div class='color'>
   <table border='2'>
  <tr>
    <th>Key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===" " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
   </div> `
   
})