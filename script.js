/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunctionalt() {
  var x = document.getElementById("myTopnavalt");
  if (x.className === "myTopnavalt") {
    x.className += " responsive";
  } else {
    x.className = "myTopnavalt";
  }
}
