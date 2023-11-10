 const User = require('../models/user');
const getUsers = (request, response) => {
	return User.find({})
		.then((data) => {
			response.statusCode = 200;
			response.send(data);
		})
		.catch((error) => {
			response.statusCode = 404;
			response.send(error.message);
		});
};
const getUser = (request, response) => {
	const { user_id } = request.params;
	console.log(user_id);
	return User.findById(user_id)
		.then((user) => {
			response.statusCode = 200;
			response.send(user);
		})
		.catch((error) => {
			response.statusCode = 404;
			response.send(error.message);
		});
};
const createUser = (request, response) => {
	return User.create({
		...request.body,
	})
		.then((user) => {
			response.statusCode = 201;
			response.send(user);
		})
		.catch((error) => {
			response.statusCode = 500;
			response.send(error.message);
		});
};

const updateUser = (request, response) => {
	const { user_id } = request.params;
	return User.findByIdAndUpdate(user_id, { ...request.body })
		.then((user) => {
			response.statusCode = 200;
			response.send('user was update');
		})
		.catch((error) => {
			response.statusCode = 500;
			response.send(error.message);
		});
};

const deleteUser = (request, response) => {
	const { user_id } = request.params;
	return User.findByIdAndDelete(user_id, { ...request.body })
		.then((user) => {
			response.statusCode = 200;
			response.send('user was delete');
		})
		.catch((error) => {
			response.statusCode = 500;
			response.send(error.message);
		});
};

module.exports = {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
};
