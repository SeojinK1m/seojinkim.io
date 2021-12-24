AOS.init()

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["building things!", "Indian food!", "Taylor Swift!"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
    if(window.innerWidth < 900) {
        document.getElementsByClassName("navbar")[0].style.top = "0vh"
    } else {
        document.getElementsByClassName("navbar")[0].style.transition = "top 0.4s"
        document.getElementById("navButton").style.right = "-10vh"
    }
    loadDevStac()
});

const showResume = () => {
    window.open("SAM-KIM-RESUME.pdf")
}

const loadMicrosoft = () => {
    const workInfo = document.querySelector("#workInfo")
    workInfo.innerHTML = "<h3>Incoming SWE Intern</h3><h4>May 2022 - Aug 2022</h4><p><i class='fa fa-chevron-circle-right'></i> Will Intern at Microsoft during the Summer of 2022.</p>"
    button = document.querySelector("#MSButton")

    chooseWorkplace(button)
}

const loadDevStac = () => {
    const workInfo = document.querySelector("#workInfo")
    workInfo.innerHTML = "<h3>Software Engineer</h3><h4>Oct 2021 - Present</h4><p><i class='fa fa-chevron-circle-right'></i> Developed Fund Kill, a web app that is currently being used in a real Washington University business course to teach students about investments and exit strategies.</p><p><i class='fa fa-chevron-circle-right'></i> Utilized React Native to help develop a cross-platform mobile application currently being used at the Washington University Medical Center that assists doctors in detecting strokes in patients.</p>"
    button = document.querySelector("#DSButton")
    
    chooseWorkplace(button)
}

const loadCapitalOne = () => {
    const workInfo = document.querySelector("#workInfo")
    workInfo.innerHTML = "<h3>SWE Intern</h3><h4>Oct 2021 - Present</h4><p><i class='fa fa-chevron-circle-right'></i> Built an HR operational dashboard using Vue.js and Django as part of the Enterprise, Data, and Machine Learning team at Capital One. The dashboard will be used by more than 200 HR employees.</p><p><i class='fa fa-chevron-circle-right'></i> Developed a slack chat bot that will promote Diversity, Inclusion, and Belonging within Capital One's working culture.</p>"
    button = document.querySelector("#COButton")
    
    chooseWorkplace(button)
}

let menuOpen = false
const handleMenu = () => {

    navbar = document.getElementsByClassName("navbar")[0]

    if(menuOpen) {
        navbar.style.left = "100vw"
    } else {
        navbar.style.left = "calc(100vw - 200px)"
    }

    menuOpen = !menuOpen
}

const chooseWorkplace = (button) => {
    document.querySelector("#COButton").classList.remove("Selected")
    document.querySelector("#DSButton").classList.remove("Selected")
    document.querySelector("#MSButton").classList.remove("Selected")

    if(!button.classList.contains("Selected")) {
        button.classList.add("Selected")
    }
}

let prevPagePos = window.pageYOffset
window.onscroll = () => {
    if(window.innerWidth >= 900) {
        const currentPagePos = window.pageYOffset
        if(prevPagePos > currentPagePos) {
            document.getElementsByClassName("navbar")[0].style.top = "0";
        } else {
            document.getElementsByClassName("navbar")[0].style.top = "-5vh";
        }
        prevPagePos = currentPagePos;
    }
}

window.onresize = () => {
    const width = window.innerWidth
    if(width < 900) {
        document.getElementsByClassName("navbar")[0].style.top = "0vh"
        document.getElementById("navButton").style.right = "3vw"
        document.getElementsByClassName("navbar")[0].style.transition = "top 0.0s"
        document.getElementsByClassName("navbar")[0].style.left = "200vw"
    } else {
        document.getElementsByClassName("navbar")[0].style.top = "0vh"
        document.getElementsByClassName("navbar")[0].style.transition = "top 0.4s"
        document.getElementsByClassName("navbar")[0].style.left = "0vh"
        document.getElementById("navButton").style.right = "200vw"
        menuOpen = false
    }
}

   