import './style.css';
import './mobile-tablet.css';
import { gsap } from 'gsap/gsap-core';

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

gsap.from('.paragraph', { duration: 1, y: '-100%', ease: 'bounce' });