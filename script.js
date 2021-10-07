//myLibrary will hold the book objects
let myLibrary = [];
const bookShelf = document.querySelector("tbody");


//book object constructor
function Book(title, author, numOfPages, haveRead) {
  (this.title = title),
    (this.author = author),
    (this.numOfPages = numOfPages),
    (this.haveRead = haveRead),
    (this.info = function () {
      return title + " " + author + " " + numOfPages + " " + haveRead;
    });
}

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let numOfPages = document.getElementById("numofpages").value;
  let haveRead = document.querySelector('input[name="haveread"]:checked').value;

  let book = new Book(title, author, numOfPages, haveRead);

  myLibrary.push(book);

  return false;
}
//self explanatory
let i = 0;
function displayBooks() {

    if (myLibrary.length == 0) {
      // bookShelf.style.display = 'none';
      console.log('no books');
      return 'no books';
  } else {
    for (let book of myLibrary) {
     
      const tableRow = document.createElement("tr");
      const delBut = document.createElement("button");

      const td = document.createElement("td");

      delBut.setAttribute("class", "delete-button")
      delBut.setAttribute('onclick','return this.parentNode.remove()');
    
      tableRow.setAttribute("id", "book" + "-" + i);


    
      td.innerHTML = 'Book: ' + book.title + ' author: ' + book.author + ' number of pages: ' + book.numOfPages + ' Have you read? ' + book.haveRead;
      td.appendChild(delBut);
      tableRow.appendChild(td);
      bookShelf.appendChild(tableRow);
      i++;
    }
    
  } 
}

//delete the object from array function 
//figure out how to remove the obj from the array when button is clicked
function deleteObj() {

  index = myLibrary.findIndex(x => x.title === "let");

}




//Toggle to show or hide the form
function toggleForm() {
  var x = document.getElementById("myForm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//hides the form
function hideForm() {
  var x = document.getElementById("myForm");
  x.style.display = "none";
}

// let div = document.createElement('div');
// div.className = 'book';
// div.textContent= 'test';
// const tableRow = document.querySelector('#books');

// const div = document.createElement('div');
// div.textContent = "tests"
// bookShelf.appendChild(div);
