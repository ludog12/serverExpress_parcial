const router = require('express').Router()

const {getUser, registerUser, updateUser } = require('../controllers/user.controller');
const {loginUser} = require('../controllers/login.user')

router.get('/user', getUser);

router.post('/login', loginUser)

router.post('/register',registerUser);

router.put('/updateUser/:id', updateUser)



module.exports = router;