const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        school: String,
        file: String,
    }
)
const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel;