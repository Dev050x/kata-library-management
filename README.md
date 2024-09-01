# Library Management System

## Overview

This project is a simple library management system implemented in TypeScript. It supports the following features:
- **Add Books**: Add new books to the library.
- **Borrow Books**: Borrow a book if it's available.
- **Return Books**: Return a borrowed book.
- **View Available Books**: List all books that are currently available.

## Setup

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd kata-library-management
    ```
2. **Install Dependencies**
    Install project dependencies using npm:    

    ```bash
    npm install
    ```
3. **Build the Project**
    Compile the TypeScript code to JavaScript:
    ```bash
    npx tsc
    ```
### Running the Project
Since this project is designed to be run as a Node.js application, there is no web server or UI component. However, you can interact with it through unit tests or add a custom script to integrate with a UI.

## Running Tests
The project uses Jest for testing. You can run the tests with:
    ```bash
    npx jest
    ```

## Project Structure
src/: Contains TypeScript source files.
Book.ts: Defines the Book class.
Library.ts: Defines the Library class.
main.ts: Entry point for the application.
tests/: Contains test files.
Library.test.ts: Contains tests for the Library class.
tsconfig.json: TypeScript configuration file.
package.json: Project metadata and dependencies.

## Usage
To use the library management system, you can modify the src/main.ts file to include a script that interacts with the Library class or integrate it into a UI as needed.

## Contributing
Feel free to submit issues or pull requests to improve the project. Contributions are welcome!