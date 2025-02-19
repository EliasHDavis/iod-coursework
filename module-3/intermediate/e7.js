const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];
    
    function getTitle(name){
      let temp = books.find(book => book.title == name);
      let id = temp.id;
      console.log(`"${name}" ID: ${id}`)
    }
    getTitle('Brave New World');

    
    function getOldBooks(date = 1950){
      let old = books.filter(book => book.year < date);
      console.log(old);
    }
    getOldBooks();

    /*
    function addGenre(){
      let withGenre = books.map(book => {...book, genre: 'Classic'});
      return withGenre;
    }
    console.log(addGenre());
    */
   
    function getTitles(letter){
      let titles = books.filter(book => book.author[0] == letter);
      return titles;
    }
    console.log(getTitles('H'));

    
    function latestBook(){
        let latest = 0;
        let name = '';
        books.forEach((book) => {
          if(book.year > latest){
            latest = book.year;
            name = book.title;
            }
        })
        return `${name}, in ${latest}`;
      }
      console.log(latestBook());