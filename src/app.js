const express = require('express');
const app = express();
const CORS = require('./middlewares/CORS');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dotenv = require('dotenv');

const mongoose = require('mongoose');

const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');

dotenv.config();
const {
	PORT = 3005,
	API_URL = 'http://127.0.0.1',
	MONGO_URL = 'mongodb://localhost:27017/backend',
} = process.env;

mongoose
	.connect(MONGO_URL)
	.then(() => console.log('connected'))
	.catch((error) => console.log(error));

app.use(CORS);

app.use(userRouter);
app.use(bookRouter);

app.listen(PORT, () => {
	console.log(`hello, сервер запущен по адресу ${API_URL}:${PORT}`);
});

