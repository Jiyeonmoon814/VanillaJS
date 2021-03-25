//Book Class >> Represents a Book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI Class : Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title : 'Harry Potter',
                author : 'J.K Rowling',
                isbn : '123456'
            },
            {
                title : 'The Vegetarian',
                author : 'Han Kang',
                isbn : '987654'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = //'
        //<td>${book.title}</td>
        //<td>${book.author}</td>
        //<td>${book.isbn}</td>
        //<td><a href="#" class="btn btn-outline-primary btn-sm delete">X</a></td>
        //';
        '<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="#" class="btn btn-outline-primary btn-sm delete">X</a></td>';
        
        list.appendChild(row);
    }

    static clearField() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
//Store Class : Handles Storage

//Event : Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event : Add a Book
document.querySelector('#book-form').addEventListener('submit',(e) => {
        e.preventDefault();
        //Get form Values
        const title = document.querySelector('#title').value;
        const author = document.querySelector('#author').value;
        const isbn = document.querySelector('#isbn').value;

        //Instatiate book
        const book = new Book(title, author, isbn);

        //console.log(book);

        //Add book to UI
        UI.addBookToList(book);

        //Clear Field
        UI.clearField();

    });

//Event : Remove a Book