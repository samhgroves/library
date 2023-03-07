let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function displayBooks() {
  const bookList = document.getElementById("book-list");
  // Check if the book is already in the DOM
  myLibrary.forEach(function (book, index) {
    const bookExists = Array.from(bookList.children).some(function (element) {
      return element.dataset.bookIndex === String(index);
    });
    // If book is not in DOM, add it
    if (!bookExists) {
      const bookDiv = document.createElement("div");
      bookDiv.textContent = book.title + " by " + book.author;
      bookDiv.dataset.bookIndex = index;
      bookList.appendChild(bookDiv);
      // Add delete button to each book div
      const deleteBtn = document.createElement("BUTTON");
      deleteBtn.textContent = "Delete";
      bookDiv.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", function () {
        const bookIndex = parseInt(bookDiv.dataset.bookIndex);
        myLibrary.splice(bookIndex, 1);
        bookList.removeChild(bookDiv);
      });
    }
  });
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function () {
  let newTitle = document.getElementById("title");
  let newAuthor = document.getElementById("author");
  let newBook = new Book(newTitle.value, newAuthor.value);
  const bookExists = myLibrary.some(function (book) {
    return book.title === newBook.title && book.author === newBook.author;
  });
  if (!bookExists) {
    myLibrary.push(newBook);
    displayBooks();
  }
  newTitle.value = "";
  newAuthor.value = "";
});
