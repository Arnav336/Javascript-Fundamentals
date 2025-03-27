function getLocalDay(n) {

    n= new Date()
    let day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    if (n == 0) {
      n = 7;
    }
  
    return day[n.getDay()];
  }
  const date=new Date(2013,6,7,8,1,2)
  console.log(getLocalDay(date))