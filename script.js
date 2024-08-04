const mobileMenu = document.querySelector('#mobile-menu')
mobileMenu.addEventListener('click', openCloseMobileMenu)

function openCloseMobileMenu() {
  const navLinks = document.querySelector('.nav-links')
  
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none'
    return
  }
  navLinks.style.display = 'block'
  
}

const bgSection1 = document.querySelector('.bg-section-1')
const bg1 = './assets/rename/img4.webp';
bgSection1.style.backgroundImage = `url(${bg1})` 
// bgSection1.style.backgroundPosition = 'center';
// bgSection1.style.backgroundSize = 'cover';
// bgSection1.style.backgroundRepeat = 'no-repeat';


function createSection4() {
const parentContainer = document.createElement('div');

const h1 = document.createElement('h1')
h1.textContent = 'hello';

parentContainer.appendChild(h1)

return parentContainer;
}
const section4Element = createSection4();
const section1Element = document.querySelector('.section-1-container')
section1Element.insertAdjacentElement('afterend',section4Element)