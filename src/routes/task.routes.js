const router = require('express').Router();

const {getTask, postTask} = require('../controllers/task.controller');

const validarJWT = require('../midelware/validarJwt');

router.get('/task',validarJWT,  getTask);

router.post('/task', validarJWT, postTask);


module.exports = router;    