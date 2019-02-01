// Book Constructor
function Book (title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI (){}

// Alert Message
UI.prototype.alertMessage = function (message, className){
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

// Add book to list method
UI.prototype.addBookToList = function(book){

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

// Delete Book UI method
UI.prototype.deleteBook = function(target){
    // Event Delegation
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}
// Clear Message UI method
UI.prototype.clearMessage = function (message, time){
    setTimeout(function(){
        message.remove();
    }, time);
}
// Clear input UI method
UI.prototype.clearInput = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

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

    // Call Delete book ui method
    ui.deleteBook(e.target);

    // Display Success message
    ui.alertMessage('Book Removed!', 'success');
    e.preventDefault();
});