const Book = require('../models/book');

const getBooks = (request, response) => {
	return Book.find({})
		.then((data) => {
			response.statusCode = 200;
			response.send(data);
		})
		.catch((error) => {
			response.statusCode = 404;
			response.send(error.message);
		});
};
const getBook = (request, response) => {
	const { book_id } = request.params;
	console.log(book_id);
	return Book.findById(book_id)
		.then((book) => {
			response.statusCode = 200;
			response.send(book);
		})
		.catch((error) => {
			response.statusCode = 404;
			response.send(error.message);
		});
};
const addBook = (request, response) => {
	return Book.create({
		...request.body,
	})
		.then((book) => {
			response.statusCode = 201;
			response.send(book);
		})
		.catch((error) => {
			response.statusCode = 500;
			response.send(error.message);
		});
};

const updateInfoBook = (request, response) => {
	const { book_id } = request.params;
	return Book.findByIdAndUpdate(book_id, { ...request.body })
		.then((book) => {
			response.statusCode = 200;
			response.send('book info was update');
		})
		.catch((error) => {
			response.statusCode = 500;
			response.send(error.message);
		});
};

const deleteBook = (request, response) => {
	const { book_id } = request.params;
	return Book.findByIdAndDelete(book_id, { ...request.body })
		.then((book) => {
			response.statusCode = 200;
			response.send('book was delete');
		})
		.catch((error) => {
			response.statusCode = 500;
			response.send(error.message);
		});
};

module.exports = {
	getBooks,
	getBook,
	addBook,
	updateInfoBook,
	deleteBook,
};
