
function myFunction() {
  var img = document.getElementById("id1");
  if(img.innerHTML=="Message"){
  img.innerHTML = "Sent";
  img.style.color='white';
  img.style.backgroundColor = "#FF7A7A";
  
 }
 else if(img.innerHTML=="Sent"){
 img.innerHTML = "Message";
 img.style.color='White';
 img.style.backgroundColor = "#5C5859";

 }
 
 }


 function myFunction_2(){
   var img_2 = document.getElementById("id2");
   if(img_2.innerHTML=="Follow"){
     img_2.innerHTML="Unfollow";
     img_2.style.color="white";
     img_2.style.backgroundColor="#D3A06A";
   }
   else if(img_2.innerHTML=="Unfollow"){
    img_2.innerHTML="Follow";
    img_2.style.color="white";
    img_2.style.backgroundColor="#5C5859";
   }
 }
