export const regions = [
    {
        id:1,
        name:"Tashkent"
    },
    {
        id:2,
        name:"Gulistan"
    },
    {
        id:3,
        name:"Jizzakh"
    },
    {
        id:4,
        name:"Samarkand"
    },
    {
        id:5,
        name:"Farg'ona"
    },
    {
        id:6,
        name:"Andijon"
    },
    {
        id:7,
        name:"Namangan"
    },
    {
        id:8,
        name:"Navoiy"
    },
    {
        id:9,
        name:"Bukhara"
    },
    {
        id:10,
        name:"Termiz"
    },
    {
        id:11,
        name:"Qarshi"
    },
    {
        id:12,
        name:"Xiva"
    },
    {
        id:13,
        name:"Nukus"
    },
]
let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]
let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
export function getTemp(temp) {
    return `${Math.round(temp) <= 0 ? Math.round(temp) : '+' + Math.round(temp)}°`
}

export function getDay(dt) {
    return days[new Date(1000 * dt).getDay()]
}
export function getDate(dt) {
    return `${new Date(dt * 1000).getDate()} ${months[new Date(1000 * dt).getMonth()]}`
}
export function getTime(dt) {
    const time = new Date(dt * 1000)
    let h = time.getHours()
    let m = time.getMinutes()
    if (h < 10) h = `0${h}`
    if (m < 10) m = `0${m}`
    
        
    
    return `${h} : ${m}`
}
