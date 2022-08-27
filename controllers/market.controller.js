const Market = require('../models/market.model')

const marketStatus = (req,res) => {
    var nstatus = true;
    Market.find({})
    .then((data) => {
        data = data[0];
        if(data.status)
        {
            nstatus = false;
        }
        console.log(nstatus);
        Market.findOneAndUpdate(
            {},
            {
                $set : {
                    status : nstatus,
                }
            }
        )
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.render("error",{data : err.message});
        })
    })
    .catch((err) => {
        res.render("error",err.message);
    })
}

module.exports = {
    marketStatus
}