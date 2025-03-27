function getSecondsToday(){
    const date=new Date()
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diff= date-today
    return Math.round(diff/1000)
}
console.log(getSecondsToday())
