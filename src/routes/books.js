const router = require('express').Router();
const loggerUrl = require('../middlewares/loggerURL');
const {
	getBooks,
	getBook,
	addBook,
	updateInfoBook,
	deleteBook,
} = require('../controllers/books');

router.use(loggerUrl);

router.get('/books', getBooks);
router.get('/books/:book_id', getBook);
router.post('/books/add_book', addBook);
router.patch('/books/:book_id', updateInfoBook);
router.delete('/books/:book_id', deleteBook);

module.exports = router;
