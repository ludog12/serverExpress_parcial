const router = require('express').Router()

const {getUser, loginUser, registerUser } = require('../controllers/user.controller');

router.get('/user', getUser);

router.post('/login', loginUser)

router.post('/register',registerUser);


//router.delete('/user/delete', deleteUser);


module.exports = router;