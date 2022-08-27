const Order = require('../models/order.model')
const { v4: uuidv4 } = require('uuid');

const create = (req,res) => {
    const order = new Order({
        orderId : uuidv4(),
        quantity : req.body.quantity,
        order : req.body.order,
        stockId : 1,
        stockName : "DBS",
        price : req.body.price,
        orderType : req.body.orderType,
        orderDate : new Date()
    })
    order.save()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).render("error",{data : err.message});
    })
}

const executeOrder = (req,res) => {
    
}

module.exports = {
    create
}