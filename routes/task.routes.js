const router = require('express').Router();

const {getTask, getTasks, postTask, putTask, deleteTask} = require('../controllers/task.controller');
const validarJWT = require('../midelware/validarJwt');

router.get('/task',validarJWT,  getTask);

router.post('/task', validarJWT, postTask);

router.put('/task/:id', putTask);

router.delete('/task/:id', deleteTask);

module.exports = router;    