// BOOK Class
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    alertMessage(message, className){
        // create message div\
        const div = document.createElement('div');
        // Add classes to div
        div.classList = `alert ${className}`;
        // Append message textNode
        div.appendChild(document.createTextNode(message));
        // Get parent Element
        const parent = document.querySelector('.container');
        // Get sibling Element
        const form = document.querySelector('#book-form');
        // Attach error div before form
        parent.insertBefore(div, form);
        // instatiate new UI
        const ui = new UI();
        // Remove message after some time
        ui.clearMessage(div, 3000);
    }

    addBookToList(book){
        // Get book list
        const list = document.getElementById('book-list');
        // create List Element
        const row = document.createElement("tr");
        // Append HTML to row
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='delete'>X</></td></td>`;
        // Add row to List of Items
        list.appendChild(row);

    }

    deleteBook(target){
        // Event Delegation
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearMessage(message, time){
        setTimeout(function(){
            message.remove();
        }, time);
    }

    clearInput(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

}

// Storage Class
class Store{
    static getBooks(){
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        // books.forEach(book => {
            return books;
        // });
    };

    static displayBooks(){
        const books = Store.getBooks();
        const ui = new UI();
        books.forEach(book => {
            ui.addBookToList(book);
        }); 
    };

    static save(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    };

    static delete(isbn){
        const books = Store.getBooks();
        books.forEach(function(book, index){
            // validate
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        // save back to localStorage
        localStorage.setItem('books', JSON.stringify(books));
    };
}

//Even listener to load all books
document.addEventListener('DOMContentLoaded', Store.displayBooks());

// Event Listener for Add book
document.getElementById('book-form').addEventListener('submit', function(e){
    e.preventDefault();
    // Get form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

        // Instantiate A Book
        const book = new Book(title, author, isbn);
        // Instantiate new UI
        const ui = new UI();
    // VALIDATION OF INPUTS
    if(title == '' || author == "" || isbn == ""){
        ui.alertMessage('Sorry, fields must not be empty', 'error');
    }else{
        // Add book to list
        ui.addBookToList(book);
        // Persist to localStorage
        Store.save(book);
        // Display Sucess message
        ui.alertMessage('Book Added!', 'success');
        // Clear Input
        ui.clearInput();
    }
    // e.preventDefault();
});

// EVENT DELIGATION.  Event listener for deleting list item
document.getElementById("book-list").addEventListener('click', function(e){
    // instantiate new ui
    const ui = new UI();

    // Delete book from ui
    ui.deleteBook(e.target);

    //Delete book from localStorage
    const isbn = e.target.parentElement.previousElementSibling.textContent;
    Store.delete(isbn);

    // Display Success message
    ui.alertMessage('Book Removed!', 'success');
    e.preventDefault();
});