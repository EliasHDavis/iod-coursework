const book = {
    'title' : "Coding",
    'description' : "A short story about coding.",
    'author' : "Elias himself",
    "numberOfPages" : 'Way too many'
};

for (const key in book) {
    console.log(key + ' : ' + book[key])
};

book.description = "There's nothing here.";
console.log(book.description);

const bookArray = [book, book, book, book, book];
console.log(bookArray);