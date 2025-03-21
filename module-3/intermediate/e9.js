let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };
  
  function sumSalaries(){
    let sum = 0;
    for(let key in salaries){
      sum += salaries[key];
    }
    console.log(sum);
  }
  sumSalaries();
  
  function topEarner(){
    let high = 0;
    let breadWinner;
    for(let key in salaries){
      if(salaries[key] > high){
        high = salaries[key];
        breadWinner = key;
      }
    }
    console.log('The highest earner is: ' + breadWinner + ', who earned: ' + high);
  }
  topEarner();