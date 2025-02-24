/*
function printFib(interval, limit){
  let first = 0; 
  let second = 1; 
  let current = 1;
  let counter = 1;
  let timer = setInterval( () => {
    console.log(current);
    current = first + second;
    first = second;
    second = current;
    if (counter == limit) clearInterval(timer);
    counter++;
  }, interval);
}

printFib(1000, 10);
*/
function fib2(delay, limit){
    let counter = 1;
    let first = 0; 
    let second = 1; 
    let current = 1;
    setTimeout(function repeatThis(loop) {
      console.log(current);
      current = first + second;
      first = second;
      second = current;
      if (loop < limit) setTimeout(repeatThis, delay, loop+1) 
    }, delay, counter);
}
  
  fib2(1000, 10);