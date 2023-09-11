const cards = document.querySelector(".cards")

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
]

Array.from(cards.children).map((card, i) => {
    card.children[0].setAttribute('src', _graduatesData[i].avatar)
    card.children[1].innerHTML = _graduatesData[i].name
    card.children[2].innerHTML = _graduatesData[i].review
})
