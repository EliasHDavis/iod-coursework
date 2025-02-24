Object.prototype.delay = function(ms){
    return (...args) => {
      setTimeout(() => this.apply(null, args), ms);
  }
}  
  
function multiply(a, b) {
  console.log( a * b );
}
function multiply4Num(a,b,c,d) {
  console.log(a*b*c*d);
}
  
multiply.delay(500)(5, 5);
multiply4Num.delay(500)(5, 5, 5, 5);