const router = require('express').Router();

const {getTask, postTask} = require('../controllers/task.controller');

const validarJWT = require('../midelware/validarJwt');

router.get('/task',validarJWT,  getTask);

router.post('/task', validarJWT, postTask);

// router.put('/task/:id');

// router.delete('/task/:id', deleteTask);

module.exports = router;    