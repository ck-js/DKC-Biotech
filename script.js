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


// function createSection4() {
// const parentContainer = document.createElement('div');

// const h1 = document.createElement('h1')
// h1.textContent = 'hello';

// parentContainer.appendChild(h1)

// return parentContainer;
// }
// const section4Element = createSection4();
// const section1Element = document.querySelector('.section-1-container')
// section1Element.insertAdjacentElement('afterend',section4Element)


// retreive each slide wrapper element
const slideElements = document.querySelectorAll('.slide-wrappers')
const slideElementsArray = Array.from(slideElements);
const firstSlide = slideElementsArray[0];
const secondSlide = slideElementsArray[1];
const thirdSlide = slideElementsArray[2];


// firstSlide.classList.remove('current-slide')
// secondSlide.classList.add('current-slide')

function nextSlide() {
  const currentSlide = document.querySelector('.current-slide')
  // const currentSlideCircle = document.querySelector('.current-slide-circle')

// alert(currentSlide.id)
if (currentSlide.id === 'slide-1') {
  currentSlide.classList.remove('current-slide')
  secondSlide.classList.add('current-slide')

//   currentSlideCircle.classList.remove('current-slide-circle')
// slideCirclesArray[1].classList.add('current-slide-circle')
}
if (currentSlide.id === 'slide-2') {
  currentSlide.classList.remove('current-slide')
  thirdSlide.classList.add('current-slide')

//   currentSlideCircle.classList.remove('current-slide-circle')
// slideCirclesArray[2].classList.add('current-slide-circle')
}
if (currentSlide.id === 'slide-3') {
  currentSlide.classList.remove('current-slide')
  firstSlide.classList.add('current-slide')

//   currentSlideCircle.classList.remove('current-slide-circle')
// slideCirclesArray[0].classList.add('current-slide-circle')
}

}
setInterval(nextSlide,2000)



document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.slide-in');

    function checkVisibility() {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check in case elements are already in view
});




