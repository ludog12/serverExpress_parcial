const mongoose = require("mongoose")
const connection = () => {
    mongoose.connect(process.env.URI_MONGODB).then(()=>console.log("Base de Datos conectada :)")).catch(err => console.log(err))
}
module.exports = connection