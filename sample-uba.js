function ubaNav() {
    var x = document.getElementById("ubaTopNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }