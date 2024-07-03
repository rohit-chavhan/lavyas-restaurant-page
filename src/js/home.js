import mainImage from '../images/main-page-pz.jpg';
import '../css/home.css';

const homePage = () => {
  const elm = document.querySelector('.content');
  elm.innerHTML = '';
  elm.classList = '';
  elm.classList.add('content');
  elm.classList.add('homeClass');
  const myImg = document.createElement('img');
  myImg.src = mainImage;
  elm.appendChild(myImg);
};

export default homePage;
