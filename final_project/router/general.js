const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

/**
 * Task 6 — Register a new user
 */
public_users.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    let userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(409).json({ message: "Username already exists" });
    }

    users.push({ username: username, password: password });
    return res.status(201).json({ message: "User registered successfully" });
});

/**
 * Task 10 — Get all books (async/await with Promise)
 */
public_users.get('/', async function (req, res) {
    try {
        const getBooks = () => {
            return new Promise((resolve, reject) => {
                if (books) {
                    resolve(books);
                } else {
                    reject("No books available");
                }
            });
        };

        const bookList = await getBooks();
        return res.status(200).json(bookList);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
});

/**
 * Task 11 — Get book details by ISBN (async/await with Promise)
 */
public_users.get('/isbn/:isbn', async function (req, res) {
    try {
        const getBookByISBN = (isbn) => {
            return new Promise((resolve, reject) => {
                if (books[isbn]) {
                    resolve(books[isbn]);
                } else {
                    reject("Book not found");
                }
            });
        };

        const book = await getBookByISBN(req.params.isbn);
        return res.status(200).json(book);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
});

/**
 * Task 12 — Get books by author (async/await with Promise)
 */
public_users.get('/author/:author', async function (req, res) {
    try {
        const getBooksByAuthor = (author) => {
            return new Promise((resolve, reject) => {
                const bookKeys = Object.keys(books);
                const result = [];

                bookKeys.forEach(key => {
                    if (books[key].author.toLowerCase() === author.toLowerCase()) {
                        result.push({ isbn: key, ...books[key] });
                    }
                });

                if (result.length > 0) {
                    resolve(result);
                } else {
                    reject("No books found for this author");
                }
            });
        };

        const booksByAuthor = await getBooksByAuthor(req.params.author);
        return res.status(200).json(booksByAuthor);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
});

/**
 * Task 13 — Get books by title (async/await with Promise)
 */
public_users.get('/title/:title', async function (req, res) {
    try {
        const getBooksByTitle = (title) => {
            return new Promise((resolve, reject) => {
                const bookKeys = Object.keys(books);
                const result = [];

                bookKeys.forEach(key => {
                    if (books[key].title.toLowerCase() === title.toLowerCase()) {
                        result.push({ isbn: key, ...books[key] });
                    }
                });

                if (result.length > 0) {
                    resolve(result);
                } else {
                    reject("No books found with this title");
                }
            });
        };

        const booksByTitle = await getBooksByTitle(req.params.title);
        return res.status(200).json(booksByTitle);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
});

/**
 * Task 5 — Get book reviews
 */
public_users.get('/review/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    if (books[isbn]) {
        return res.status(200).json({ reviews: books[isbn].reviews || {} });
    } else {
        return res.status(404).json({ message: "Book not found" });
    }
});

module.exports.general = public_users;

