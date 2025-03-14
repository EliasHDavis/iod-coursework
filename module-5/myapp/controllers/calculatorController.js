const Calculator = require('../libraries/calculator');
let myCalc = new Calculator();


const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = myCalc.add(number1, number2);
    // let sum = number1 + number2
    // console.log(sum)
    res.status(200)
    res.json({ result: sum })
};

const subtractNumbers= (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = myCalc.sub(number1, number2);
    // let difference = number1 - number2
    // console.log(difference)
    res.status(200)
    res.json({ result: difference })
};

const multiplyNumbers= (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = myCalc.mult(number1, number2);
    // let product = number1 * number2
    // console.log(product)
    res.status(200)
    res.json({ result: product })
};

const divideNumbers= (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let quotient = myCalc.div(number1, number2);
    // let quotient = number1 / number2
    // console.log(quotient)
    res.status(200)
    res.json({ result: quotient })
};



module.exports = {
    addNumbers: addNumbers,
    subtractNumbers: subtractNumbers,
    multiplyNumbers: multiplyNumbers,
    divideNumbers: divideNumbers
}