var s;
var r;
const el = document.getElementById("ul");
const el2= document.getElementById("searchdiv");
const style = window.getComputedStyle(el);
const style2 = window.getComputedStyle(el2);
function toggleNotifi(obj) {

  
  if (obj.id.slice(-3) == "div") {
    s = obj.id.slice(0, -3);
    r = document.getElementById(obj.id);
  } else {
    r = document.getElementById(obj.id + "div");
  }
  
  if(s!="bell" && s!="search")
    document.getElementById('ul').style.display = "flex";

  if(s=="search"){
      document.getElementById(s).style.width = "100vw";
      document.getElementById("right").style.display = "none";
      document.getElementById("left").style.display = "none";
      document.getElementById("input1").focus();
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
  if(s=="search"){
    document.getElementById("right").style.display = "flex";
    document.getElementById("left").style.display = "flex";
}
  document.getElementById(s).style.display = "none";
  if(s!="bell" && style.getPropertyValue('flex-direction')=="column") { 
    document.getElementById('ul').style.display = "none";
  }
  r.style.setProperty("--after", "0");
  document.getElementById("cover").style.display = "none";
}
