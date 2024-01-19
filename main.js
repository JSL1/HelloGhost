import './style.css';
import './mobile-tablet.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

//mobile menu / DOM functionality
const burg = document.getElementById('hamburg');
const mobileMenu = document.getElementById('mobile-nav');
burg.addEventListener('click', () => {
    mobileMenu.classList.remove('hiding');
    mobileMenu.style.display = "block";
});

const exitButton = document.getElementById('exit');
exitButton.addEventListener('click', () => {
    mobileMenu.style.display = "none";
    mobileMenu.classList.add('hiding');

});

gsap.registerPlugin(ScrollTrigger);

gsap.from('.paragraph1', {
    y: -200, 
    scrollTrigger: {
        trigger: '.paragraph1',
        toggleActions: "restart pause resume none",
    },
    duration: 1, 
    ease: 'bounce'
});

gsap.from('.paragraph2', {
    y: -200, 
    scrollTrigger: {
        trigger: '.paragraph2',
        toggleActions: "restart pause resume none",
    },
    duration: 1, 
    ease: 'bounce'
});

gsap.from('.paragraph3', {
    y: -200, 
    scrollTrigger: {
        trigger: '.paragraph3',
        toggleActions: "play none none none",
    },
    opacity: 0,
    ease: 'bounce',
    duration: 1, 
});