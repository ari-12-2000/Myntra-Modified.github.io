var s;
var r;
var support=document.getElementById("bell-icon");
function toggleNotifi(obj) {
  if (obj.id.slice(-3) == "div") {
    s = obj.id.slice(0, -3);
    r = document.getElementById(obj.id);
  } else {
    r = document.getElementById(obj.id + "div");
  }
 
    document.getElementById(s).style.display = "flex";
 
  r.style.setProperty("--after", "1");

  document.getElementById("cover").style.display = "block";
  
}

function removeNotifi(obj) {
  if (obj.id.slice(-3) == "div") {
    s = obj.id.slice(0, -3);
    r = document.getElementById(obj.id);
  } else {
    r = document.getElementById(obj.id + "div");
  }

  r.style.setProperty("--after", "0");
  document.getElementById("cover").style.display = "none";
  document.getElementById(s).style.display = "none";
}

window.onload=function() {
  console.log(window.innerWidth);
  if(window.innerWidth<='768' && window.innerHeight<='1024'){
    document.getElementById('materials').style.height="30vh";
    
  }

}