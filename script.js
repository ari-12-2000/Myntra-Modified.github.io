var s;
var r;

function toggleNotifi(obj) {
  
  if (obj.id.slice(-3)== "div"){
    s= obj.id.slice(0, -3); 
    r=document.getElementById(obj.id);
  }
  else{
    r=document.getElementById(obj.id+"div");
  }
  r.style.setProperty('--after', '1');
  document.getElementById("cover").style.display = "block";
    document.getElementById(s).style.display = "flex";
  
}

function removeNotifi(obj) {
  
  if (obj.id.slice(-3)== "div"){
    s= obj.id.slice(0, -3); 
    r=document.getElementById(obj.id);
  }
  else{
    r=document.getElementById(obj.id+"div");
  }
  r.style.setProperty('--after', '0');
  document.getElementById("cover").style.display = "none";
    document.getElementById(s).style.display = "none";
}
