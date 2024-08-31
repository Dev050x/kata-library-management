export class Book {
    public available: boolean;

    constructor(
        public isbn: string,
        public title: string,
        public author: string,
        public publicationYear: number
    ) {
        this.available = true; // By default, a new book is available
    }
}
