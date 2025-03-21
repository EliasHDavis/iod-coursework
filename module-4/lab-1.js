let num1 = [];
let num2 = [];
let current = 1;


//Determine what number to alter
const numChange = function(which){
  current = which;
  console.log(current);
}

//Add a number to the array
function pushNumber(num = 0){
    if (current == 1){
      num1.push(num);
      document.getElementById("num1").innerText += num;
    }else{
      num2.push(num);
      document.getElementById("num2").innerText += num;
    }
}


//clear number
function clea(){
  location.reload()
}


//Change the strings into a integer
function concatArray(arr) {
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i].toString();
        res += curr;
    }
    let ans = parseInt(res);
    return ans;
}


//--------MATH FUNCTIONS-------
//add
const addNums = function(){
    let first = concatArray(num1);
    let second = concatArray(num2);
    let result =  first + second;
    alert(result);
    console.log(result);
}
//subtract
const subNums = function(){
    let first = concatArray(num1);
    let second = concatArray(num2);
    let result =  first - second;
    alert(result);
    console.log(result);
}
//multiply
const multNums = function(){
    let first = concatArray(num1);
    let second = concatArray(num2);
    let result =  first * second;
    alert(result);
    console.log(result);
}
//divide
const divNums = function(){
    let first = concatArray(num1);
    let second = concatArray(num2);
    let result =  first / second;
    alert(result);
    console.log(result);
}
