const navbar = document.querySelector('.navbar');
const homeButton = document.querySelector('.navHomeButton');
const mainLinks = document.querySelector('.mainLinks');
const pagesContainer = document.querySelector('.pagesContainer');
const slideButtons = document.querySelector('.slideButtons');
const slidesWrapper = document.querySelector('.slidesInWrapper');
const lpanel = document.querySelector('.lpanelroot')
const rpanel = document.querySelector('.rpanelroot')


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
  pagesContainer.childNodes[1].classList.add('active');
};


const currentSlidePage = {

  _currentPage: 0,

  get value() {
    return this._currentPage;
  },

  set value(newPage) {
    pagesContainer.children[currentSlidePage.value].classList.remove('active');
    this._currentPage = newPage;
    pagesContainer.children[currentSlidePage.value].classList.add('active');
    updateSlidePosition();
  },
};

pagesContainer.addEventListener('click', e => {
  if (!e.target.classList.contains('pagesContainer')) {
    const childrenIndex = Array.from(pagesContainer.children).indexOf(e.target);
    currentSlidePage.value = childrenIndex;
  }
});

slideButtons.addEventListener('click', e => {
  if (e.target.parentElement.id === 'left') {
    if (currentSlidePage.value === 0) {
      currentSlidePage.value = pagesContainer.children.length - 1
    } else {
      currentSlidePage.value -= 1;
    };
  } else if (e.target.parentElement.id === 'right') {
    if (pagesContainer.children.length - 1 === currentSlidePage.value) {
      currentSlidePage.value = 0
    } else {
      currentSlidePage.value += 1;
    };
  };
});

function updateSlidePosition() {
  const translateXValue = -currentSlidePage.value * 100;
  Array.from(slidesWrapper.children).map(el => el.style.transform = `translateX(${translateXValue}%)`);
}

setInterval(() => {
  if (pagesContainer.children.length - 1 === currentSlidePage.value) {
    currentSlidePage.value = 0;
  } else {
    currentSlidePage.value += 1;
  }
}, 8000);



slidesWrapper.addEventListener('click', e => {
  switch (e.target.closest('.slide').id) {
    case 'slide1':
      console.log('Redirect slide one');
      break;
    case 'slide2':
      console.log('Redirect slide two');
      break;
    case 'slide3':
      console.log('Redirect slide three');
      break;
    case 'slide4':
      console.log('Redirect slide four');
      break;
    default:
      break;
  }
})

//////////////////////////////////// FOLLOWING IS A HARCODED MOCK DATA ///////////////////////////////////

const _leftPanelData = [
  {
    id: 0,
    headline: 'University response to the invasion of Ukraine',
    subHeadline: 'Information, advice and support for staff and students impacted',
    image: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_small_highlight/s3/disc_ukraine_flag.jpg?itok=HLfoxG7t'
  },
  {
    id: 1,
    headline: 'The OUP Blog',
    subHeadline: 'Communicative luck reduction: machine-like or social (or both)?',
    image: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_small_highlight/s3/disc_oup_chat_gpt.jpg?itok=TXp-m4md'
  },
  {
    id: 2,
    headline: 'Featured podcast',
    subHeadline: 'Futuremakers: Childhood and adolescent anxiety',
    image: 'https://podcasts.ox.ac.uk/sites/default/files/image-mirror/futuremakers_1.jpg'
  },
  {
    id: 3,
    headline: 'Article headline',
    subHeadline: 'Text-description',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg/800px-Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg'
  }
];



const _rightPanelData = [
  {
    id: 0,
    headline: 'Ships, Storms and Climate Change',
    date: individualDateSubstradtion(2),
  },
  {
    id: 1,
    headline: 'Colour Revolution: Victorian Art, Fashion & Design',
    date: individualDateSubstradtion(3),
  },
  {
    id: 2,
    headline: 'The Beatrice Blackwood Lecture 2023: Why Museums?',
    date: individualDateSubstradtion(5),
  },
  {
    id: 3,
    headline: 'Cascading Principles - a major mathematically inspired exhibition by Conrad Shawcross',
    date: individualDateSubstradtion(7),
  },
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////





function individualDateSubstradtion (daysToSubstract) {
  const _today = new Date()
  _today.setDate(_today.getDate() - daysToSubstract)
  return _today
}


_leftPanelData.map(item => {
  const discoverBox = document.createElement('div');
  discoverBox.classList.add('lpanel-boxitem');
  
  const image = document.createElement('img');
  image.classList.add('lpanel-boxitem-image');
  image.src = item.image;
  
  const header = document.createElement('span');
  header.classList.add('sidepanels-header');
  header.innerHTML = item.headline;
  
  const text = document.createElement('p');
  text.classList.add('lpanel-boxitem-text');
  text.innerHTML = item.subHeadline;

  const headerWrapper = document.createElement('div');
  headerWrapper.classList.add('lpanel-boxitem-headerWrapper');


  headerWrapper.append(image);
  headerWrapper.append(header);

  discoverBox.append(headerWrapper);
  discoverBox.append(text);
  lpanel.append(discoverBox);


  discoverBox.addEventListener('mouseenter', () => {
    discoverBox.classList.add('color-on')
  })

  discoverBox.addEventListener('mouseleave', () => {
    discoverBox.classList.remove('color-on')
  })
});

const _datesToMonth = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec"
}

_rightPanelData.map(ev => {
  const eventBox = document.createElement('div');
  eventBox.classList.add('rpanel-boxitem');

  const headline = document.createElement('span');
  headline.classList.add('sidepanels-header');
  headline.innerHTML = ev.headline;

  const date = document.createElement('span');
  date.classList.add('rpanel-events-date');
  const dateWrapper = document.createElement('span')
  dateWrapper.classList.add('rpanel-dateWrapper')
  const day = document.createElement('p');
  day.classList.add('rpanel-event-day');
  day.innerHTML = ev.date.getDate();
  const month = document.createElement('p');
  month.classList.add('rpanel-event-month');
  const currentMonth = Object.entries(_datesToMonth).find(item => ev.date.getMonth() === +item[0])[1];
  month.innerHTML = currentMonth
  dateWrapper.append(day)
  dateWrapper.append(month)
  date.append(dateWrapper);

  eventBox.append(date); 
  eventBox.append(headline);
  rpanel.append(eventBox);

  eventBox.addEventListener('mouseenter', () => {
    eventBox.classList.add('color-on')
  })

  eventBox.addEventListener('mouseleave', () => {
    eventBox.classList.remove('color-on')
  })
})