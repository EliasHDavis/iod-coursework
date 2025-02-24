const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today');
console.log(today.getHours()*60 + today.getMinutes() + ' minutes have passed today');
console.log(today.getHours()*360 + today.getSeconds() + ' seconds have passed today');

const birth = new Date('2003-12-12');
console.log('\n' + birth);

function howOld(){
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();
  if (days < 0) {
    months = months - 1; 
    days += 30; 
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  console.log( `I am ${years} years, ${months} months, and ${days} days old`);
}
howOld();

function inBetween(date1,date2){
  if (date1 > date2){
    let difference = date1 - date2;
    let holder = new Date(difference);
    console.log((holder.getFullYear() - 1970) + ' years, ' + holder.getMonth() + ' months, and ' + holder.getDate() + ' days between the two dates.');
  }else{
    let difference = date2 - date1;
    let holder = new Date(difference);
    console.log((holder.getFullYear() - 1970) + ' years, ' + holder.getMonth() + ' months, and ' + holder.getDate() + ' days between the two dates.');
  }
}
console.log(inBetween(today, birth));

//should convert to a lower unit and use remanders to get an acurate value