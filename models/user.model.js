const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    admin : Boolean,
},{timestamps:true});

const User = mongoose.model('User',userSchema);
module.exports = User;