import { Library } from '../src/Library';
import { Book } from '../src/Book';

describe('Library', () => {
    let library: Library;

    beforeEach(() => {
        library = new Library();
    });

    test('should add a book', () => {
        const book = new Book('123', 'Test Book', 'Author', 2021);
        library.addBook(book);
        const books = library.viewAvailableBooks();
        expect(books).toHaveLength(1);
        expect(books[0].isbn).toBe('123');
    });

    test('should not allow adding a duplicate book', () => {
        const book = new Book('123', 'Test Book', 'Author', 2021);
        library.addBook(book);
        expect(() => library.addBook(book)).toThrow('Book already exists');
    });

    test('should borrow a book', () => {
        const book = new Book('123', 'Test Book', 'Author', 2021);
        library.addBook(book);
        library.borrowBook('123');
        const availableBooks = library.viewAvailableBooks();
        expect(availableBooks).toHaveLength(0);
    });

    test('should not borrow a book that is already borrowed', () => {
        const book = new Book('123', 'Test Book', 'Author', 2021);
        library.addBook(book);
        library.borrowBook('123');
        expect(() => library.borrowBook('123')).toThrow('Book is not available');
    });

    test('should not borrow a book that does not exist', () => {
        expect(() => library.borrowBook('999')).toThrow('Book not found');
    });
});








