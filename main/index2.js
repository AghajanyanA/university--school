const cards = document.querySelector(".cards");
const profContainer = document.querySelector(".prof-container");
const footerYear = document.querySelector(".footer-current-year")

const _graduatesData = [
    {
        id: 0,
        name: "John Doe",
        review: "I graduated from this university, and it was an amazing experience. The faculty is highly knowledgeable and supportive. The campus facilities are top-notch, and I'm proud to be an alumnus.",
        avatar: "https://www.washburn.edu/_redesign2018/_files/images/interior/academics/RS836_ULT_DSC_8917-thumb.jpg",
    },
    {
        id: 1,
        name: "Alice Smith",
        review: "Attending this university was a life-changing decision. The professors are dedicated to student success, and the research opportunities are outstanding. I'm grateful for the education I received here.",
        avatar: "https://i.ibb.co/Kym6yVB/excited-3126449-1280.jpg",
    },
    {
        id: 2,
        name: "Bob Johnson",
        review: "I can confidently say that this university prepared me well for my career. The hands-on learning experiences and mentorship from faculty members were invaluable. I'm proud to be an alum.",
        avatar: "https://community.thriveglobal.com/wp-content/uploads/2018/01/Happy_guy.jpg",
    },
];

const _professorsData = [
    {
        id: 0,
        name: "Dr. Sarah Johnson",
        field: "Computer Science",
        experience: 15
    },
    {
        id: 1,
        name: "Prof. John Smith",
        field: "Physics",
        experience: 20
    },
    {
        id: 2,
        name: "Dr. Maria Rodriguez",
        field: "Biology",
        experience: 12
    },
    {
        id: 3,
        name: "Prof. David Lee",
        field: "History",
        experience: 18
    },
    {
        id: 4,
        name: "Dr. Emily Chen",
        field: "Psychology",
        experience: 10
    },
    {
        id: 5,
        name: "Prof. Lisa Walker",
        field: "Chemistry",
        experience: 22
    },
    {
        id: 6,
        name: "Dr. Michael White",
        field: "Economics",
        experience: 16
    },
    {
        id: 7,
        name: "Prof. Karen Davis",
        field: "Sociology",
        experience: 19
    },
    {
        id: 8,
        name: "Dr. James Martin",
        field: "Mathematics",
        experience: 14
    },
    {
        id: 9,
        name: "Prof. Laura Adams",
        field: "Political Science",
        experience: 21
    }
];

Array.from(cards.children).forEach((card, i) => {
    card.children[0].setAttribute('src', _graduatesData[i].avatar);
    card.children[1].innerHTML = _graduatesData[i].name;
    card.children[2].innerHTML = _graduatesData[i].review;
})

_professorsData.forEach(prof => {
    const card = document.createElement('div');
    card.classList.add('prof-card');
    const profName = document.createElement('span');
    const profField = document.createElement('span');
    const profExperience = document.createElement('span');
    profName.classList.add('prof-name');
    profField.classList.add('prof-field');
    profExperience.classList.add('prof-experience')
    profName.innerHTML = prof.name
    profField.innerHTML = prof.field
    profExperience.innerHTML = `${prof.experience} years of experience`
    card.append(profName)
    card.append(profField)
    card.append(profExperience)
    profContainer.append(card);
})

const profCard = document.querySelector('.prof-card')
const profCardComputedStyles = getComputedStyle(profCard)
const profCardCalculatedPaddings = parseInt(profCardComputedStyles.paddingLeft) + parseInt(profCardComputedStyles.paddingRight)


const howManyCardsOfProfessorsThereShouldBe = Math.floor((profContainer.clientWidth - (Math.round(profContainer.clientWidth / profCard.clientWidth) - 1)) / profCard.clientWidth)
const gapsIncluded = 10 * (howManyCardsOfProfessorsThereShouldBe - 1)
const newWithOfCardOfProfToFitTheContainer = (profContainer.clientWidth - gapsIncluded) / howManyCardsOfProfessorsThereShouldBe - profCardCalculatedPaddings;

document.querySelectorAll('.prof-card').forEach(card => card.style.width = newWithOfCardOfProfToFitTheContainer + 'px')

footerYear.innerHTML = (new Date().getFullYear())