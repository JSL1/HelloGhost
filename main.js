import './style.css';
import { gsap } from 'gsap/gsap-core';

gsap.from('.paragraph', { duration: 1, y: '-100%', ease: 'bounce' });