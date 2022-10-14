const router = require('express').Router();

const {getTask, postTask, deleteTask, updateTask} = require('../controllers/task.controller');

const validarJWT = require('../midelware/validarJwt');

router.get('/task',validarJWT,  getTask);

router.post('/task', validarJWT, postTask);

router.delete("/task/:id", validarJWT, deleteTask)

router.put("/task/:id", validarJWT, updateTask)
module.exports = router;    