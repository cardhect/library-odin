let myLibrary = [];

//book needs (Author, title, number of pages, and wether its been read)
function Book(author, title, numOfPages, hasBeenRead) {
  //The constructor
  (this.author = author),
    (this.title = title),
    (this.numOfPages = numOfPages),
    (this.hasBeenRead = hasBeenRead),
    this.info = function () {
      return title + ' by, ' + author;
    }
}

function addBookToLibrary(author, title, numOfPages, hasBeenRead) {
  //Do stuff here
  const book = new Book(author, title, numOfPages, hasBeenRead);
  //adds book to myLibrary Array;
  myLibrary.push(book);
}

// addBookToLibrary("Suzan Collins", "Catching Fire", 245, true);

// addBookToLibrary("Suzan Collins", "Hunger Games", 300, false);

function createBookCard() {
  //Selects the main-section div
  const main = document.querySelector(".main-section");
  //Creates new div element
  const card = document.createElement("div");
 
  //helps to count each separate book .card element
  let i = 0;
  if (myLibrary.length>i) {
    i++;
  }
  //Styles Card element
  // card.setAttribute('class','card');
  card.classList.add('card'+i);
  //Adds card to main-section 
  main.appendChild(card);

}

function addBookToCard() {
  const card = document.querySelector('.card'+ 1);
  
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  const p = document.createElement('h3');
  const read = document.createElement('h3');

  //adds the title to the card element
  h1.textContent = myLibrary[myLibrary.length-1].title;
  h2.textContent = 'by, ' + myLibrary[myLibrary.length-1].author;
  p.textContent = 'Pages: ' + myLibrary[myLibrary.length-1].numOfPages;
  read.textContent = 'Has read? ' + myLibrary[myLibrary.length-1].hasBeenRead;
  card.appendChild(h1);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(read);
}


// myLibrary[0].author --> can be used to access obj elements in array.

// createBookCard();
// addBookToCard();

function test() {
// addBookToLibrary("Suzan Collins", "Catching Fire", 245, true);
  createBookCard();
  addBookToCard();
}

//! REMINDER---> You are trying to figure out how to select different cards to put the book info into. Currently it is going into the first .card element. You need each book info in their own .card elements. 