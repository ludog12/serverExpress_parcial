
const jwt= require("jsonwebtoken");
const validarJWT= async(res, req, next)=>{
    const token = req.header.token;

    if(!token){
        req.status(400).json({
            msg:'No token received'
        })
    }
    
    try {
        const {uid}=jwt.verify(token, process.env.SECRET)
        const user = await finallyId(uid)
        req.status(400).json({
            msg:'No se encontró usuario'
        })
    } catch (error) {
       console.log(error)
       req.status(400).json({
        msg:'Error de autenticación'
    })
    }

    


}

module.exports=validarJWT