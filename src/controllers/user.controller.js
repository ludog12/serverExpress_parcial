
const user = require('../models/user')
const Ctrl = {}
const bcrypt= require('bcrypt');
const e = require('express');
Ctrl.getUser = async (req, res)=>{
    const users = await user.find();

    res.json(users);   
}

Ctrl.registerUser = async (req, res)=>{
    
    try {
        const {username, email, password} = req.body;
        if(!username&&!email&&!password){
            res.status(404).json({
                msg:'Try again'
            })
        }

        const newPassword= bcrypt.hashSync(password,10)

        

        res.json(newPassword)

        const newUser = new user({
            username,
            email,
            password: newPassword
        })

        const saveUser = await newUser.save()

        res.json(saveUser);
        res.json({
            msj:'Usser created'
        })
        
    } catch (error) {
        console.log(error)
    }
    
}

Ctrl.loginUser = async (req, res)=>{
    try {
        const {username, password }=req.body
        const user = await user.findOne({username});

        if (!user){
            res.status(404).json({
                msg:'no user found'
            })
        } 
        const passwordIsValid= bcrypt.compareSync(password, user.password)
        res.json(passwordIsValid)
        
        if(!passwordIsValid){
            res.status(400).json({
                msg:'Password  Invalid'
            })
        }


        const token = await generarJWT({uid: user._id})
     
        res.json({
            msg: 'Successful login',
            token
        })

   } catch (error) {
        console.log(error)
        res.status(400).json({
            msg:'Error al iniciar sesión'
        })
    }
}
module.exports=Ctrl;