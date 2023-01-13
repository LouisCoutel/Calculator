// Create DOM Elements
const body = document.getElementsByTagName('body');
const navSection = document.getElementById('nav-section');
const welcomeSection = document.getElementById('welcome-section');
const projectsSection = document.getElementById('projects');
const contactSection = document.getElementById('contact-section');
const welcomeTextDiv = document.getElementById('welcome-text-div');
const welcomeText = document.getElementById('welcome-text');
const jobTitle = document.getElementById('job-title')

// control for end of margin expand
divUp = false;

//increases margin of welcome-text-div to push the rest of the page slowly
function marginExpand() {
    if (i >= 30) {
    welcomeTextDiv.style.marginBottom = i + 'vh';
    i+= 0.03;
    } 
    // acts as a makeshift timer to delay the animation
    else {
    console.log('daccord')
    i+= 0.04;
    }
    // when condition is met, stop and update status
    if (i >= 40) {
        divUp = true;
        clearInterval(intervalID)
        
    }
}



let i = 0;

let intervalID  = setInterval(marginExpand, 1);

//prevents child element from being displayed before animation end
function displayText() {
    if (divUp = true) {
        welcomeText.style.display = 'inline';
    }
}

displayText();

// declares vertical coordinate in viewport "y"
let y = 0;

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


















    



