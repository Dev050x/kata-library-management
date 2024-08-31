import { Book } from '../src/Book';

describe('Book', () => {
    it('should create a book with the correct properties', () => {
        const book = new Book('12345', 'Test Book', 'Author', 2024);
        expect(book.isbn).toBe('12345');
        expect(book.title).toBe('Test Book');
        expect(book.author).toBe('Author');
        expect(book.publicationYear).toBe(2024);
    });
});
