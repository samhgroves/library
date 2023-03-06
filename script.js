let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.sayTitle = function () {
  console.log(this.title);
};

function addBookToLibrbary() {
  myLibrary.push();
}
/*
const bookOne = new Book("Harry Potter", "JK Rowling");
const bookTwo = new Book("Catcher in the Rye", "Some Guy");
const bookThree = new Book("monkeyooke", "samgroves");
myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);
*/
function displayBooks() {
  const bookList = document.getElementById("book-list");
  // Check if the book is already in the DOM
  myLibrary.forEach(function (book) {
    const bookExists = Array.from(bookList.children).some(function (element) {
      return element.textContent === book.title + " by " + book.author;
    });
    // If book is not in DOM, add it
    if (!bookExists) {
      const bookDiv = document.createElement("div");
      bookDiv.textContent = book.title + " by " + book.author;
      bookList.appendChild(bookDiv);
    }
  });
}
displayBooks();
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function () {
  let newTitle = document.getElementById("title");
  let newAuthor = document.getElementById("author");
  let newBook = new Book(newTitle.value, newAuthor.value);
  myLibrary.push(newBook);
  displayBooks();
  newTitle.value = "";
  newAuthor.value = "";
});
