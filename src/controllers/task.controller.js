const Task = require('../models/task');
const Ctrl = require('./user.controller');
const ctrl = {};

ctrl.getTask = async (req, res) => {

    try {
        const uid = req.user._id;

        if (!uid) {
            res.status(400)({
                msg: 'No ID received'
            })
        }

        const getTask = await Task.find({ userId: uid })

        res.json(getTask);

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'An error has ocurred'
        })
    }
}


ctrl.postTask = async (req, res) => {

    try {
        const { title, description } = req.body;
        const uid = req.user._id;

        if (!uid) {
            res.status(400)({
                msg: 'No ID received'
            })
        }

        if (!title && !description) {
            res.status(400).json({
                msg: 'Fill the fields'
            })
        }

        const newTask = new Task({
            title, description, userId: uid
        })

        await newTask.save();

        res.json({
            msg: 'Task created',
            id:uid
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'Error to created task'
        })
    }


}

ctrl.updateTask = async(req, res)=>{
    try {
        const {title, description} = req.body
        const id = req.params.id
        const updTask = await Task.findByIdAndUpdate(id, {title, description})
        res.json({
            msg:"Task updated",
            updTask
        })


    } catch (error) {
        console.log(error)
        res.status(400).json({
            msg:"Cannot update task."
        })
    }
}

ctrl.deleteTask = async(req, res)=>{
    const id = req.params.id

    const delTask = await Task.findByIdAndUpdate(id, {isActive: false})

    if(!delTask){
        res.json("Cannot delete task")
    }

    res.json("Task deleted ")
}

module.exports = ctrl;