import '../css/menu.css';

const menuPage = () => {
  const elm = document.querySelector('.content');
  elm.innerHTML = '';
  elm.classList = '';
  elm.classList.add('content');
  elm.classList.add('menuClass');

  const headingDiv = document.createElement('div');
  headingDiv.classList.add('headDiv');
  const title = document.createElement('h1');
  title.classList.add('h2');
  title.innerText = '---- OUR MENU ----';
  headingDiv.appendChild(title);

  elm.appendChild(headingDiv);
};

export default menuPage;
