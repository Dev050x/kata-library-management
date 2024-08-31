import { Library } from './Library';
import { Book } from './Book';

const library = new Library();

document.getElementById('addBook')?.addEventListener('click', () => {
    const isbn = (document.getElementById('isbn') as HTMLInputElement).value;
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const author = (document.getElementById('author') as HTMLInputElement).value;
    const publicationYear = parseInt((document.getElementById('publicationYear') as HTMLInputElement).value);

    if (isbn && title && author && !isNaN(publicationYear)) {
        try {
            library.addBook(new Book(isbn, title, author, publicationYear));
            alert('Book added successfully!');
            updateBookList();
        } catch (error) {
            alert(error.message);
        }
    } else {
        alert('Please fill in all fields correctly.');
    }
});

document.getElementById('borrowBook')?.addEventListener('click', () => {
    const isbn = (document.getElementById('borrowIsbn') as HTMLInputElement).value;
    if (isbn) {
        try {
            library.borrowBook(isbn);
            alert('Book borrowed successfully!');
            updateBookList();
        } catch (error) {
            alert(error.message);
        }
    } else {
        alert('Please enter an ISBN.');
    }
});

document.getElementById('returnBook')?.addEventListener('click', () => {
    const isbn = (document.getElementById('returnIsbn') as HTMLInputElement).value;
    if (isbn) {
        try {
            library.returnBook(isbn);
            alert('Book returned successfully!');
            updateBookList();
        } catch (error) {
            alert(error.message);
        }
    } else {
        alert('Please enter an ISBN.');
    }
});

function updateBookList() {
    const bookList = document.getElementById('bookList');
    if (bookList) {
        bookList.innerHTML = '';
        const books = library.viewAvailableBooks();
        books.forEach(book => {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author} (${book.isbn})`;
            bookList.appendChild(li);
        });
    }
}
