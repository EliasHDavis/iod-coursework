const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
const ugh = [1,1,1,2,4,7,3,1,2,4,2,1,2,1,0];

function unique(array){
  return new Set(array);
}

console.log(unique(colors));
console.log(unique(testScores));
console.log(unique(ugh));