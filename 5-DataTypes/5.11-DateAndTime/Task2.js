function getWeekDay(date){
    date=new Date();
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return days[date.getDay()]
}
console.log(getWeekDay(2023,12,4))