const User = require('../models/user')
const getUsers = (request, response) => {
	response.statusCode = 200;
	response.send('hello users!');
};
const getUser = (request, response) => {
	const { user_id } = request.params;
	response.statusCode = 200;
	response.send(`hello user with id - ${user_id}`);
};
const createUser = (request, response) => {
    return User.create({
        ...response.body
    }).then((user) => {
        response.statusCode = 201
        response.send(user)
    })
};

const updateUser = (request, response) => {};

const deleteUser = (request, response) => {};

module.exports = {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
};
