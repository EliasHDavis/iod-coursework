const book = {
    'title' : "Coding",
    'description' : "A short story about coding.",
    'author' : "Elias himself",
    "number_of_pages" : 'Way too many'
};

for (const key in book) {
    console.log(key + ' : ' + book[key])
};