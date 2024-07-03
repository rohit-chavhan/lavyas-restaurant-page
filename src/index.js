import './css/styles.css';

import homePage from './js/home';
import menuPage from './js/menu';
import aboutPage from './js/about';

const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const aboutBtn = document.querySelector('.about-btn');

homeBtn.addEventListener('click', homePage);

menuBtn.addEventListener('click', menuPage);

aboutBtn.addEventListener('click', aboutPage);

window.onload = () => homePage();
