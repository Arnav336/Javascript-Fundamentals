function createCalendar(elem, year, month) {
    let d = new Date(year, month - 1);
  
    let weekdays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  
    let table = '<table class="calendar"><tr>';
    for (let day of weekdays) {
      table += `<th>${day}</th>`;
    }
    table += '</tr><tr>';
  
    let startDay = d.getDay();
    if (startDay === 0) startDay = 7;
  
    for (let i = 1; i < startDay; i++) {
      table += '<td></td>';
    }
  
    while (d.getMonth() === month - 1) {
      table += `<td>${d.getDate()}</td>`;
  
      if (d.getDay() === 0) {
        table += '</tr><tr>';
      }
  
      d.setDate(d.getDate() + 1);
    }
  
    let lastDay = d.getDay();
    if (lastDay !== 1) {
      for (let i = lastDay; i <= 7 && i !== 0; i++) {
        table += '<td></td>';
      }
    }
  
    table += '</tr></table>';
    elem.innerHTML = table;
  }
  
  let cal = document.getElementById('calendar');
  createCalendar(cal, 2008, 8);