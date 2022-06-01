let myLibrary = [];
let i = 0;

//book needs (Author, title, number of pages, and wether its been read)
function Book(author, title, numOfPages, hasBeenRead) {
  //The constructor
  (this.author = author),
    (this.title = title),
    (this.numOfPages = numOfPages),
    (this.hasBeenRead = hasBeenRead),
    (this.info = function () {
      return title + " by, " + author;
    }),
    (this.index = function(){
      return myLibrary.indexOf(Book);
    })

}
//Adds book object to Array
function addBookToLibrary(author, title, numOfPages, hasBeenRead) {
  //Do stuff here
  const book = new Book(author, title, numOfPages, hasBeenRead);
  //adds book to myLibrary Array;
  myLibrary.push(book);
}
//Creates Dom Element that will contain the book info
function createBookCard() {
  //Selects the main-section div
  const main = document.querySelector(".book-shelf");
  //Creates new div element
  const card = document.createElement("div");

  //helps to count each separate book .card element
  if (myLibrary.length > i) {
    i++;
  }
  //Styles Card element
  card.setAttribute("class", "card");
  card.setAttribute("id", "card" + i);
  card.setAttribute("data-index-number", i);
  //Adds card to main-section
  main.appendChild(card);
}

function addBookToCard() {
  if (myLibrary.length > i) {
    i++;
  }

  const btn = document.createElement("button");
  const card = document.querySelector("#card" + i);

  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const p = document.createElement("h3");
  const read = document.createElement("h3");

  btn.setAttribute("class","delete");
  // myLibrary[0].author --> can be used to access obj elements in array.
  //adds the title to the card element
  btn.textContent = "remove book";
  h1.textContent = myLibrary[myLibrary.length - 1].title;
  h2.textContent = "by, " + myLibrary[myLibrary.length - 1].author;
  p.textContent = "Pages: " + myLibrary[myLibrary.length - 1].numOfPages;
  read.textContent = "Have you read this? " + myLibrary[myLibrary.length - 1].hasBeenRead;
  card.appendChild(h1);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(read);
  card.appendChild(btn);

  btn.addEventListener('click',(i) => removeBook(i));
}
//Remove book function.
function removeBook(i) {  
  
  let deleteBook = i.target.parentElement;
  let dataIndexNum = parseInt(i.target.parentElement.attributes[2].value);
  deleteBook.remove();
  myLibrary.splice(dataIndexNum-1,1);

//updates the data index number after the array is updated
  const cards = document.querySelectorAll('.card');
  for (let index = 0; index < myLibrary.length; index++) {
    
    cards[index].attributes[2].value = index + 1;
  }
    
  console.log(myLibrary);
  console.log(i);
}

//Submits book info from form into a displayed Card
function submitBook() {
  // document.getElementById('title').value; <---- grabs the info from the form
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const hasRead = document.querySelector('input[name="has-read"]:checked').value;

  addBookToLibrary(author, title, pages, hasRead);
  createBookCard();
  addBookToCard();
}

//Display form on button click
function openForm() {
  document.getElementById("book-form").style.display = "flex";
  document.getElementById("enter-btn").style.display = "none";
}

function closeForm() {
  document.getElementById("book-form").style.display = "none";
  document.getElementById("enter-btn").style.display = "block";
}


