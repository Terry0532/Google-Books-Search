const router = require("express").Router();
const { addBook, deleteBook, allBooks } = require("../../controllers");

router
    .route("/")
    .post(addBook.addBook)
    .get(allBooks.allBooks);

module.exports = router;