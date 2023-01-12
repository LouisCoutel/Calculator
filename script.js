// Create DOM Elements for body and #nav-section
const body = document.getElementsByTagName('body');
const navSection = document.getElementById('nav-section');
const welcomeSection = document.getElementById('welcome-section');
const projectsSection = document.getElementById('projects');
let contactSection = document.getElementById('contact-section');

// declares vertical coordinate in viewport "y"
let y= 0;

// Checks vertical coordinate on mouse movement and triggers adequate nav-section animation (down or back up)
onmousemove = e => {
    
    // Mouse position
    y = e.clientY;

    //declare function that triggers animation by replacing animation-name in CSS
    function triggerNavBar() {
    
        if (y < 150) {
            document.getElementById('nav-section').style.animationName = "slide-down"
        } else {
            document.getElementById('nav-section').style.animationName = "slide-back"
        }
    };

    // triggers
    triggerNavBar();
}; 

















    



