/*function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
*/

const delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`)

setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); // fourth because it is the longest delay
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); // third because 0 < 10 < 100
setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); //second because there is still a value for the delay and waits for the first oportunity even if the delay is zero
delayMsg('#4: Not delayed at all'); //first because there is no delay

let fifthTest = setTimeout(delayMsg, 7000, '#5: Will not display by 7s') // would be fifth if it wasnt canceled
clearTimeout(fifthTest); // cancels the fifth test
