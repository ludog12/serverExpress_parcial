const router = require('express').Router()

const {getUser, postUser, putUser, deleteUser } = require('../controllers/user.controller');

router.get('/user', getUser);

router.post('/login')

router.post(`/register`,register);

router.put(`/edit`, editUser);

router.delete('/user/delete', deleteUser);


module.exports = router;