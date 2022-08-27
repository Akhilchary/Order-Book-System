const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    quantity : {
        type : Number,
        required : true
    },
    orderId : {
        type : String,
        required : true
    },
    stockId : {
        type : Number,
        required : true
    },
    stockName : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true
    },
    orderStatus : {
        type : String,
        default : "PLACED",
    },
    orderType : {
        type : String,
        required : true,
    },
},{timestamps:true});

const Order = mongoose.model('Order',orderSchema);
module.exports = Order;