const navbar = document.querySelector('.navbar');
const homeButton = document.querySelector('.navHomeButton')
const mainLinks = document.querySelector('.mainLinks')

window.addEventListener('scroll', function() {
  const rect = navbar.getBoundingClientRect();

  if (rect.top <= 0) {
    navbar.classList.add('navTop')
    homeButton.classList.add('navHomeButtonOn')
  } else {
    navbar.classList.remove('navTop')
    homeButton.classList.remove('navHomeButtonOn')
  }
});