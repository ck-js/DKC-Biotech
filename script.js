function openCloseMobileMenu() {
  const navLinks = document.querySelector('.nav-links')
  
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none'
    return
  }
  navLinks.style.display = 'block'
  
}
const mobileMenu = document.querySelector('#mobile-menu')
mobileMenu.addEventListener('click', openCloseMobileMenu)