// Create DOM Elements
const welcomeTextDiv = document.getElementById("welcome-text-div");
// control for end of margin expand
let i = 0;
//increases height of welcome-text-div to push the rest of the elements up
function marginExpand() {
  //increments the element height
  if (i <= 60) {
    welcomeTextDiv.style.maxHeight = i + "vh";
    i += 0.1;
  }
  //stops the interval
  if (i >= 60) {
    clearInterval(intervalID);
  }
}
let intervalID;
setTimeout(function () {
  intervalID = setInterval(marginExpand, 1);
}, 2000);

// declares vertical coordinate in viewport "y"
let y = 0;

// Checks vertical coordinate on mouse movement and triggers adequate nav-section animation (down or back up)
onmousemove = (e) => {
  // Mouse position
  y = e.clientY;

  //declare function that triggers animation by replacing animation-name in CSS
  function triggerNavBar() {
    if (y < 150) {
      document.getElementById("nav-section").style.animationName = "slide-down";
    } else {
      document.getElementById("nav-section").style.animationName = "slide-back";
    }
  }

  // triggers
  triggerNavBar();
};