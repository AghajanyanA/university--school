const navlist = document.querySelector('.left-nav-list')

const navData = [
    {
        lt: 'How to Apply',
        link: '/'
    },
    {
        lt: 'Dates & Deadlines',
        link: '/'
    },
    {
        lt: 'Requirements',
        link: '/'
    },
    {
        lt: 'SSAR',
        link: '/'
    },
    {
        lt: 'International Applicants',
        link: '/'
    },
    {
        lt: 'PaCE',
        subCategories: [
            {
                lt: 'PaCE Academics',
                link: '/'
            },
            {
                lt: 'PaCE Majors',
                link: '/'
            },
            {
                lt: 'PaCE Student Involvement',
                link: '/'
            },
            {
                lt: 'PaCE Costs',
                link: '/'
            }
        ]   
    },
    {
        lt: 'Honors Program',
        link: '/'
    },
    {
        lt: 'Innovation Academy',
        link: '/'
    },
    {
        lt: 'Promise Program',
        link: '/'
    },
    {
        lt: 'Partnership Programs',
        link: '/'
    },
    {
        lt: 'Our Decision Process',
        link: '/'
    },
    {
        lt: 'After Being Admitted',
        link: '/'
    },
    
]

navData.forEach((item, i) => {
    item.id = i;
    Object.values(item).forEach((value) => {
      if (typeof value === 'object') {
        value.forEach((obj, j) => {
          obj.id = j;
        });
      }
    });
});


navData.forEach(item => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    li.classList.add('nav-list-li')
    a.classList.add('nav-list-a')
    item.link && a.setAttribute('href', item.link)
    li.append(a)
    a.innerHTML = item.lt   

    Object.values(item).forEach((value) => {
        if (typeof value === 'object') {
            console.log(item);
            a.classList.add('nav-with-sub-un')
            const submenuDiv = document.createElement('div')
            submenuDiv.classList.add('nav-list-sublist')
            li.append(submenuDiv)
            value.forEach(obj => {
                const li2 = document.createElement('li')
                const a2 = document.createElement('a')
                a2.setAttribute('href', obj.link)
                a2.innerHTML = obj.lt
                a2.classList.add('nav-list-a')
                submenuDiv.append(li2)
                li2.classList.add('nav-list-sublist-li')
                li2.append(a2)
            });
        }
    });

    navlist.append(li)
})

const expandable = document.querySelector('.nav-with-sub-un')
let isExpanded = false

expandable.addEventListener('click', e => {
    const sublist = document.querySelector('.nav-list-sublist')
    isExpanded = !isExpanded
    e.target.classList.toggle('nav-with-sub')
    isExpanded ? sublist.classList.add('expanded') : sublist.classList.remove('expanded')
})