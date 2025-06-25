  const img=document.querySelector('.emoji')

function change(){
  
 img.style.backgroundImage = "url('image2.jpg')"; // Image is in same folder
img.style.backgroundSize = "cover";
img.style.backgroundPosition = "center";


}

function reset(){
     img.style.backgroundImage = "url('image.png')"; // Image is in same folder
img.style.backgroundSize = "cover";
img.style.backgroundPosition = "center";
}