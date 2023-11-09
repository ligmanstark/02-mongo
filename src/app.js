const express = require('express');
const app = express();

const dotenv = require('dotenv');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const loggerOne = require('./middlewares/loggerOne');
const loggerTwo = require('./middlewares/loggerTwo');

dotenv.config();
const {
	PORT = 3008,
	API_URL = 'http://127.0.0.1',
	MONGO_URL = 'mongodb://localhost:27017/backend',
} = process.env;

mongoose.connect(MONGO_URL).catch((error) => console.log(error));

app.use(cors());
app.use(loggerOne);

app.use(userRouter);

app.listen(PORT, () => {
	console.log(`hello, сервер запущен по адресу ${API_URL}:${PORT}`);
});

