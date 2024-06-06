const date = document.querySelector('.section__date');
const rows = document.querySelectorAll('.section__row');

const items = {
    '01.01.2025-07.01.2025': {
        'понедельник': 
        {
            name: ['javaScript', 'typeScript'],
            time: ['12:40', '14:30'],
        },
        'вторник': {
            name: ['javaScript', 'typeScript', 'javaScript'],
            time: ['12:40', '14:30', '16:40'],
        },
        'среда': 0,
        'четверг': {
            name: ['javaScript'],
            time: ['12:40', '14:30'],
        },
        'пятница': {
            name: ['typeScript'],
            time: ['14:30'],
        },
        'суббота': 0,
        'воскресенье': 0,
    },
    '08.01.2025-15.01.2025': {
        'понедельник': 
        {
            name: ['javaScript', 'typeScript'],
            time: ['12:40', '14:30'],
        },
        'вторник': {
            name: ['typeScript', 'javaScript'],
            time: ['14:30', '16:40'],
        },
        'среда': {
            name: ['typeScript'],
            time: ['14:30'],
        },
        'четверг': {
            name: ['javaScript', 'javaScript'],
            time: ['12:40', '14:30'],
        },
        'пятница': 0,
        'суббота': 0,
        'воскресенье': 0,
    },
    '16.01.2025-24.01.2025': {
        'понедельник': 
        {
            name: ['javaScript'],
            time: ['14:30'],
        },
        'вторник': {
            name: ['typeScript', 'javaScript', 'typeScript'],
            time: ['14:30', '16:40', '17:50'],
        },
        'среда': 0,
        'четверг': {
            name: ['javaScript', 'javaScript', 'javaScript'],
            time: ['12:40', '14:30','16:50'],
        },
        'пятница': 0,
        'суббота': 0,
        'воскресенье': 0,
    },
    '25.01.2025-31.01.2025': {
        'понедельник': 
        {
            name: ['javaScript'],
            time: ['14:30'],
        },
        'вторник': {
            name: ['typeScript', 'javaScript', 'typeScript'],
            time: ['14:30', '16:40', '17:50'],
        },
        'среда': {
            name: ['javaScript', 'javaScript'],
            time: ['12:40', '16:50'],
        },
        'четверг': {
            name: ['javaScript', 'javaScript'],
            time: ['12:40', '16:50'],
        },
        'пятница': 0,
        'суббота': 0,
        'воскресенье': 0,
    }
};
const dayToDay = ['01.01.2025-07.01.2025', '08.01.2025-15.01.2025', '16.01.2025-24.01.2025', '25.01.2025-31.01.2025']
let thisWeek = 0;
const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];


document.querySelector('.section__nav').addEventListener('click', element => {
    if (element.target.dataset.direction === 'left' && thisWeek != 0) {
        thisWeek--;
        console.log(thisWeek)
        renderSchedule();  
    } else if (element.target.dataset.direction === 'right' && thisWeek != dayToDay.length - 1) {
        thisWeek += 1;
        console.log(thisWeek)
        renderSchedule();
    };
});

function renderSchedule() {
    for (let i = 0 ; i < 7 ; i++) {
        rows[i].innerHTML = '';
        let infoArr = [];
        let element = items[dayToDay[thisWeek]][days[i]];
        date.textContent = dayToDay[thisWeek]
        if (element === 0) continue;
        for (let i = 0 ; i < element.name.length ; i++) {
            let htmlForPush = 
            `
            <div class="section__subject">
                <div class="section__subject-name">${element.name[i]}</div>
                <div class="section__subject-bottom">
                    <div class="section__subject-time">${element.time[i]}</div>
                </div>
            </div>
            `
            infoArr.push(htmlForPush)
        };
        infoArr.forEach(element => {
            rows[i].innerHTML += element
        });
    };
};
renderSchedule()

