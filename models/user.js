const {model, Schema} = require('mongoose');

const userSchema = new Schema({
    username: {
        type:String,
        require:true

},
    email:  {
        type:String,
        require:true

},
    pasword: {
        type:String,
        require:true

}
}, {versionKey: false, timestamps:true})

module.exports = model('users', newUser)

