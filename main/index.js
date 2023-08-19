const navbar = document.querySelector('.navbar');
const homeButton = document.querySelector('.navHomeButton');
const mainLinks = document.querySelector('.mainLinks');
const pagesContainer = document.querySelector('.pagesContainer');
const slideButtons = document.querySelector('.slideButtons');
const slidesWrapper = document.querySelector('.slidesInWrapper')

window.addEventListener('scroll', function() { // navbar sliding animation logic
  const rect = navbar.getBoundingClientRect();

  if (rect.top <= 0) {
    navbar.classList.add('navTop');
    homeButton.classList.add('navHomeButtonOn');
  } else {
    navbar.classList.remove('navTop');
    homeButton.classList.remove('navHomeButtonOn');
  };
});

window.onload = function() {
  pagesContainer.childNodes[1].classList.add('active')
};


const page = {

  _currentPage: 0,

  get value() {
    return this._currentPage;
  },

  set value(newPage) {
    pagesContainer.children[page.value].classList.remove('active');
    this._currentPage = newPage;
    pagesContainer.children[page.value].classList.add('active');
    updateSlidePosition()
  },
};

pagesContainer.addEventListener('click', (e) => {
  if (!e.target.classList.contains('pagesContainer')) {
    const childrenIndex = Array.from(pagesContainer.children).indexOf(e.target);
    page.value = childrenIndex
  }
});

slideButtons.addEventListener('click', e => {
  if (e.target.parentElement.id === 'left') {
    if (page.value === 0) {
      page.value = pagesContainer.children.length - 1
    } else {
      page.value -= 1;
    }
  } else if (e.target.parentElement.id === 'right') {
    if (pagesContainer.children.length - 1 === page.value) {
      page.value = 0
    } else {
      page.value += 1;
    }
  };
});

function updateSlidePosition() {
  const translateXValue = -page.value * 100;
  Array.from(slidesWrapper.children).map(el => el.style.transform = `translateX(${translateXValue}%)`);
}

setInterval(() => {
  if (pagesContainer.children.length - 1 === page.value) {
    page.value = 0
  } else {
    page.value += 1;
  }
}, 10000)