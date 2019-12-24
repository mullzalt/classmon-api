const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        unique: true, 
        trim: true,
        minLength: 7
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    role: {
        type: Number, 
        required: true
    },
})




const User = mongoose.model('User', userSchema);
module.exports = User;