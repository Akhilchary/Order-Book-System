const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const marketSchema = new Schema({
    status : {
        type : Boolean,
        default : true
    }
});

const Market = mongoose.model('Market',marketSchema);
module.exports = Market;