import '../css/about.css';

const aboutPage = () => {
  const elm = document.querySelector('.content');
  elm.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.className = 'about';
  h2.innerText = 'this website is under construction, visit us back :)';
  elm.appendChild(h2);
};

export default aboutPage;
