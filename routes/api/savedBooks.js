const router = require("express").Router();
const { addBook, deleteBook, allBooks } = require("../../controllers");

router
    .route("/")
    .post(addBook.addBook)
    .get(allBooks.allBooks)
    .delete(deleteBook.deleteBook);

module.exports = router;