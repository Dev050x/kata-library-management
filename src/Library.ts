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
        return Array.from(this.books.values());
    }
}
