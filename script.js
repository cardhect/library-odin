let myLibrary = [];

//book needs (Author, title, number of pages, and wether its been read)
function Book(author, title, numOfPages, hasBeenRead) {
  //The constructor
  (this.author = author),
    (this.title = title),
    (this.numOfPages = numOfPages),
    (this.hasBeenRead = hasBeenRead);
}

function addBookToLibrary(author, title, numOfPages, hasBeenRead) {
  //Do stuff here
  const book = new Book(author, title, numOfPages, hasBeenRead);
  //adds book to myLibrary Array;
  myLibrary.push(book);
}

addBookToLibrary("Suzan Collins", "Catching Fire", 245, true);

addBookToLibrary("Suzan Collins", "Hunger Games", 300, false);

function createBookCard() {
  //Selects the main-section div
  const main = document.querySelector(".main-section");
  //Creates new div element
  const card = document.createElement("div");
  
  //Styles Card element
  card.setAttribute('class','card');
  
  //Adds card to main-section 
  main.appendChild(card);

}