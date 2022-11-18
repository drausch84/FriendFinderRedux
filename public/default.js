//Styling and animating the hamburger menu for nav
const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    console.log("opened");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

/* Scroll To Top Button Behavior */
let scroll = document.querySelector('.topScroll');
let options = {top: 0, left: 0, behavior: 'smooth'};
scroll.addEventListener('click', () => {window.scroll(options) });