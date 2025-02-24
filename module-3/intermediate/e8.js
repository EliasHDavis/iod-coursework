const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');

const phoneBookDEF = new Map();
phoneBookDEF.set('Darry', '485612355');
phoneBookDEF.set('Eddy', '7777777777');
phoneBookDEF.set('Fransico', '7846653295');

phoneBookABC.set('Caroline', '8');

function printBook(bookMap){
  for(let item of bookMap){
    console.log('Name: ' + item[0] +  '\n Phone#: ' + item[1]);
  }
}
printBook(phoneBookABC);
console.log('\n');

const finalBossBook = new Map();

function addBooks(book1, book2){
  for(let item of book1){
    finalBossBook.set(item);
  }
  for(let item of book2){
    finalBossBook.set(item);
  }
}

addBooks(phoneBookABC, phoneBookDEF);
printBook(finalBossBook);