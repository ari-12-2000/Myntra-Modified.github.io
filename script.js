var s;
var r;
const el = document.getElementById("ul");

const style = window.getComputedStyle(el);

function toggleNotifi(obj) {

  
  if (obj.id.slice(-3) == "div") {
    s = obj.id.slice(0, -3);
    r = document.getElementById(obj.id);
  } else {
    r = document.getElementById(obj.id + "div");
  }
  document.getElementById(s).style.display = "flex";
  if(s!="bell")
    document.getElementById('ul').style.display = "flex";

  if (r != "uldiv") r.style.setProperty("--after", "1");
  document.getElementById("cover").style.display = "block";
}

function removeNotifi(obj) {

  if (obj.id.slice(-3) == "div") {
    s = obj.id.slice(0, -3);
    r = document.getElementById(obj.id);
  } else {
    r = document.getElementById(obj.id + "div");
  }
  document.getElementById(s).style.display = "none";
  if(s!="bell" && style.getPropertyValue('flex-direction')=="column") { 
    document.getElementById('ul').style.display = "none";
  }
  if (r != "uldiv") r.style.setProperty("--after", "0");
  document.getElementById("cover").style.display = "none";
}
