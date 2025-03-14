function debounce(func, delay = 1000) {
    let timeout;
    return function(msg) {
      clearTimeout(timeout);
      timeout = setTimeout(func, delay, msg);
    };
  }
  
  function printMe(msg) {
      console.log(msg)
  }
  printMe = debounce(printMe); 
  setTimeout( printMe, 100, 'Hello there 100');
  setTimeout( printMe, 200, 'Hello there 200');
  setTimeout( printMe, 300, 'Hello there 300');