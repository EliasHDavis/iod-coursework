let twentyCents = 0.20
let tenCents = 0.10

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen);
//concatinates numbers together causing 0.200.10 to log

function currencyOperation(float1, float2, operation, numDecimals){
    switch (operation) {
        case "+":
            answer = float1 + float2;
            return answer.toFixed(numDecimals);
            break;
        case "-":
            answer = float1 - float2;
            return answer.toFixed(numDecimals);
            break;
        case "/":
            answer = float1 / float2;
            return answer.toFixed(numDecimals);
            break;
        case "*":
            answer = float1 * float2;
            return answer.toFixed(numDecimals);
            break;
    }
}

console.log(currencyOperation(0.350, 1.72, '+', 3));
console.log(currencyOperation(0.350, 1.72, '-', 3));
console.log(currencyOperation(0.350, 1.72, '/', 3));
console.log(currencyOperation(0.350, 1.72, '*', 3));