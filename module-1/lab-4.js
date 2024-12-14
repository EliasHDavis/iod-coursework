let addButton = document.getElementById("add");
let subButton = document.getElementById("sub");
let multButton = document.getElementById("mult");
let divButton = document.getElementById("div");

addButton.onclick = function add() {
    let first = document.getElementById('number1').value
    let second = document.getElementById('number2').value
    let sum = Number(first) + Number(second)
    alert(sum)
};


subButton.onclick = function sub() {
    let first = document.getElementById('number1').value
    let second = document.getElementById('number2').value
    let dif = Number(first) - Number(second)
    alert(dif)
};

multButton.onclick = function mult() {
    let first = document.getElementById('number1').value
    let second = document.getElementById('number2').value
    let product = Number(first) * Number(second)
    alert(product)
};

divButton.onclick = function div() {
    let first = document.getElementById('number1').value
    let second = document.getElementById('number2').value
    let quotient = Number(first) / Number(second)
    alert(quotient)
};

function greet(name) {
    document.getElementById('output').innerHTML("Hello " + name)
};

function getNum() {
    let first = document.getElementById('number1').value
    let second = document.getElementById('number2').value
};