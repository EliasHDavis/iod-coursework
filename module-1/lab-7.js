let addButton = document.getElementById("add");
let subButton = document.getElementById("sub");
let multButton = document.getElementById("mult");
let divButton = document.getElementById("div");

// Runs logic tests
// function runTests() {
//     if(add(5 + 9)!=14){
//         alert("error in addition")
//     }
//     if(sub(44 - 13)!=31){
//         alert("error in subtration")
//     }
//     if(mult(9 * 4)!=36){
//         alert("error in multiplication")
//     }
//     if(add(21/3)!=7){
//         alert("error in division")
//     }
// };

// runTests();


//This function returns the sum of two numbers
function add() {
    let first = document.getElementById('number1').value
    let second = document.getElementById('number2').value
    first = parseInt(first)
    second = parseInt(second)
    if(Number.isInteger(first) && Number.isInteger(second)){
        let sum = Number(first) + Number(second)
        console.log(first, second)
        alert(sum)    
    }else{
        alert("Enter numeric values only")
    }
};
addButton.onclick = add

//This function returns the difference of two numbers
function sub() {
    let first = document.getElementById('number1').value
    let second = document.getElementById('number2').value
    first = parseInt(first)
    second = parseInt(second)
    if(Number.isInteger(first) && Number.isInteger(second)){
        let dif = Number(first) - Number(second)
        alert(dif)
    }else{
        alert("Enter numeric values only")
    }
};
subButton.onclick = sub

//This function returns the product of two numbers
function mult() {
    let first = document.getElementById('number1').value
    let second = document.getElementById('number2').value
    first = parseInt(first)
    second = parseInt(second)
    if(Number.isInteger(first) && Number.isInteger(second)){
        let product = Number(first) * Number(second)
        alert(product)
    }else{
        alert("Enter numeric values only")
    }
};
multButton.onclick = mult

//This function returns the quotient of two numbers
function div() {
    let first = document.getElementById('number1').value
    let second = document.getElementById('number2').value
    first = parseInt(first)
    second = parseInt(second)
    if(Number.isInteger(first) && Number.isInteger(second)){
        let quotient = Number(first) / Number(second)
        alert(quotient)
    }else{
        alert("Enter numeric values only")
    }
};
divButton.onclick = div