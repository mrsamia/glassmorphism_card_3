document.getElementById("message").addEventListener("click", di);

function di() {
  document.getElementById("message").style.color='White';
  document.getElementById("message").innerHTML ="Sent";
  document.getElementById("message").style.backgroundColor = "#8D2D35";
  
}

document.getElementById("follow").addEventListener("click",dis);
function dis(){
    document.getElementById("follow").color="white";
    document.getElementById("follow").innerHTML="unfollow";
    document.getElementById("follow").style.backgroundColor = "#D3A06A";
}