let number1 = [];
let number2 = [];
let current = 1;

//Determine what number to alter
const numChange = function(which){
    current = which;
    console.log(current);
}

//Add a number to the array
function pushNumber(num = 0){
    if (current == 1){
    number1.push(num);
    document.getElementById("num1").innerText += num;
    }else{
    number2.push(num);
    document.getElementById("num2").innerText += num;
    }
}

//clear number
function clea(){
    location.reload()
}

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
    let num1 = concatArray(number1);
    let num2 = concatArray(number2);
    fetch(`/calculator/add?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {document.getElementById('result').innerHTML = "Result: " + data.result;})
}
//subtract
const subNums = function(){
    let num1 = concatArray(number1);
    let num2 = concatArray(number2);
    fetch(`/calculator/subtract?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {document.getElementById('result').innerHTML = "Result: " + data.result;})
}
//multiply
const multNums = function(){
    let num1 = concatArray(number1);
    let num2 = concatArray(number2);
    fetch(`/calculator/multiply?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {document.getElementById('result').innerHTML = "Result: " + data.result;})
}
//divide
const divNums = function(){
    let num1 = concatArray(number1);
    let num2 = concatArray(number2);
    fetch(`/calculator/divide?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {document.getElementById('result').innerHTML = "Result: " + data.result;})
}