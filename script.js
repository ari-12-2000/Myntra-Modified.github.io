var r;
const ids = new Set();
const anch = [];
const el = document.getElementById("ul");
const el2 = document.getElementById("searchdiv");
const el3 = document.getElementById("caret");
const style1 = window.getComputedStyle(el);
const style2 = window.getComputedStyle(el2);
const style3 = window.getComputedStyle(el3);
function toggleNotifi(obj) {
  var s;
  if (obj.id.slice(-3) == "div") {
    s = obj.id.slice(0, -3);
    r = document.getElementById(obj.id);
  } else {
    s = obj.id;
    r = document.getElementById(obj.id + "div");
  }

  if (s == "search") {
    document.getElementById(s).style.width = "100vw";
    document.getElementById("right").style.display = "none";
    document.getElementById("left").style.display = "none";
    document.getElementById("input1").focus();
  }
  if (s.slice(-9) != "drop-down" && s != "ul")
    r.style.setProperty("--after", "1");
  let flag = 1;
  if (s != "bell" && s != "search") {
    document.getElementById("ul").style.display = "flex";

    if (s != "studio" && s != "profile1") {
      if (s != "ul" && style1.getPropertyValue("flex-direction") == "column") {
        if (s.slice(-9) != "drop-down") r.style.setProperty("--after", "0");
        flag = 0;
        dropdown(s);
      }
    }
  }

  if (flag == 1) document.getElementById(s).style.display = "flex";

  document.getElementById("cover").style.display = "block";
}

function removeNotifi(obj) {
  var s;
  if (obj.id.slice(-3) == "div") {
    s = obj.id.slice(0, -3);
    r = document.getElementById(obj.id);
  } else {
    s = obj.id;
    r = document.getElementById(obj.id + "div");
  }

  if ((s.slice(-4) != "down") & (s != "ul")) {
    r.style.setProperty("--after", "0");
  }
  if (
    (s.slice(-4) == "down" ||
      s == "men" ||
      s == "women" ||
      s == "beauty" ||
      s == "home" ||
      s == "kids") &&
    style1.getPropertyValue("flex-direction") == "column"
  ) {
    if (s.slice(-4) == "down") {
      document.getElementById(s).innerHTML = "";
      document.getElementById(s).style.display = "none";
    } else {
      document.getElementById(s + "drop-down").innerHTML = "";
      document.getElementById(s + "drop-down").style.display = "none";
    }
  }
  if (s == "search") {
    document.getElementById("right").style.display = "flex";
    document.getElementById("left").style.display = "flex";
  }
  if (s == "ul" && style1.getPropertyValue("flex-direction") == "column") {
    document.getElementById("ul").style.display = "none";
  }
  if (s != "ul") document.getElementById(s).style.display = "none";

  document.getElementById("cover").style.display = "none";
}

function dropdown(s) {
  if (s.slice(-9) == "drop-down") {
    s = s.slice(0, -9);
  }
  if (!ids.has(s)) {
    ids.add(s);
    var x = document
      .getElementById(s)
      .querySelectorAll(".content a:first-child,hr + a");

    for (var i = 0; i < x.length; i++) {
      if (anch.length != i) anch.splice(i, 1, x[i]);
      else anch.push(x[i]);
      document.getElementById(s + "drop-down").appendChild(x[i]);
      
    }
  } else {
    for (var i = 0; i < anch.length; i++) {
      document.getElementById(s + "drop-down").appendChild(anch[i]);
    
    }
  }
  
  document.getElementById(s + "drop-down").style.display = "flex";
  document.getElementById("ul").style.display = "flex";
}
