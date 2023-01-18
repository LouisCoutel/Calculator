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


let sectionList = [welcomeSection, projectsSection, contactSection];
let currentSection;
let nextSection;
let currentSecTop;


function checkCurrentSection() {
    let i = 0;
    if (window.scrollY >= (1.7 * window.innerHeight)) {
        i = 2;
        } else if (window.scrollY >= 0.7 * (window.innerHeight)) {
        i = 1;
        } else {
        i = 0;    ;
        }
    currentSection = sectionList[i];
    nextSection = sectionList[i + 1]
    prevSection = sectionList[i - 1]
    currentSecTop = currentSection.getBoundingClientRect().top;
    console.log(currentSection);  
    }


/*function fastScroll() {

    checkCurrentSection();
        if (scrolling = false);
        scrolling = true;
        console.log(currentSecTop);
        if (currentSecTop < -100) {
            console.log('down!');
            nextSection.scrollIntoView({block: 'start', behavior: 'smooth'});
        }
        else if (currentSecTop > 100) {
            console.log('up!');
            prevSection.scrollIntoView({block: 'start', behavior: 'smooth'});
        } else {
            console.log('lets stay here!');
        };
        
        console.log('step 2, scroll')
        
        console.log('done !');
        setInterval(function() {
            scrolling = false;
        },1500)
        ;
    };




setInterval(fastScroll, 1500) */













    



