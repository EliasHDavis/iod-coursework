function makeCounter(startingPoint = 0, incrementBy = 1) {
    let currentCount = startingPoint;
  
    return function() {
      currentCount = currentCount + incrementBy;
      console.log(currentCount)
      return currentCount;
    };
}
  
let counter1 = makeCounter(5,5);
  
counter1();
counter1();
  
let counter2 = makeCounter();
  
counter2();
counter2();