import { Book } from './Book';

export class Library {
    private books: Map<string, Book> = new Map();

    addBook(book: Book): void {
        if (this.books.has(book.isbn)) {
            throw new Error('Book already exists');
        }
        this.books.set(book.isbn, book);
    }

    viewAvailableBooks(): Book[] {
        return Array.from(this.books.values()).filter(book => book.available);
    }

    borrowBook(isbn: string): void {
        const book = this.books.get(isbn);
        if (!book) {
            throw new Error('Book not found');
        }
        if (!book.available) {
            throw new Error('Book is not available');
        }
        book.available = false;
    }
}
