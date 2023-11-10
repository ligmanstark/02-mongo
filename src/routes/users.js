const router = require('express').Router();
const loggerUrl = require('../middlewares/loggerURL');
const {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
} = require('../controllers/users');

router.use(loggerUrl);

router.get('/', getUsers);
router.get('/users/:user_id', getUser);
router.post('/users', createUser);
router.patch('/users/:user_id', updateUser);
router.delete('/users/:user_id', deleteUser);

module.exports = router;
