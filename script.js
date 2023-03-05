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

const bookOne = new Book("Harry Potter", "JK Rowling");
const bookTwo = new Book("Catcher in the Rye", "Some Guy");
const bookThree = new Book("monkeyooke", "samgroves");
myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);

function displayBooks() {
  const bookList = document.getElementById("book-list");

  myLibrary.forEach(function (book) {
    const aBook = document.createElement("div");
    aBook.textContent = book.title + " by " + book.author;
    bookList.appendChild(aBook);
  });
}
displayBooks();

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function () {
  console.log("hi");
});
