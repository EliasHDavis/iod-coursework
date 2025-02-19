const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today');
console.log(today.getHours()*60 + today.getMinutes() + ' minutes have passed today');
console.log(today.getHours()*360 + today.getSeconds() + ' seconds have passed today');

const birth = new Date('2003-11-11');
console.log('\n' + birth);

function inBetween(date1,date2){
  if (date1 > date2){
    year = date1.getYear() - date2.getYear();
    month = date1.getMonth() - date2.getMonth();
    if (month < 0){
      year = year - 1;
      month = month + 11;
    }
    day = date1.getDay() - date2.getDay();
    if (day < 0){
      month = month - 1
      day = day + 30
    }
    return `I am ${year} years, ${month} months, and ${day} days old`
  }else{
    year = date2.getYear() - date1.getYear();
    month = date2.getMonth() - date1.getMonth();
    if (month < 0){
      year = year - 1;
      month = month + 11;
    }
    day = date2.getDay() - date1.getDay();
    if (day < 0){
      month = month - 1
      day = day + 30
    }
    return `I am ${year} years, ${month} months, and ${day} days old`
  }
}
console.log(inBetween(today, birth));

//should convert to a lower unit and use remanders to get an acurate value