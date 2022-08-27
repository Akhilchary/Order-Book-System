const User = require('../models/user.model')

const create = (req,res) => {
    User.find({username : req.body.username})
    .then((users) => {
        if(users.length)
        {
            return res.status(200).redirect("error",{data : "User already exists"});
        }
        const user = new User({
            name : req.body.name,
            username : req.body.username,
            password : req.body.password
        })
        user.save()
        .then((data) =>{
            return res.status(200).render("home",{username : data.username});
        })
        .catch((err) =>{
            return res.status(500).render("error",{data : err.message});
        })
    })
    .catch((err) => {
        return res.status(500).render("error",{data : err.message});
    })
}

const login = (req,res) => {
    User.find({username : req.body.username})
    .then((user) => {
        // console.log(user);
        user = user[0];
        if(user.username == req.body.username && user.password == req.body.password)
        {
            res.status(200).render("home",{data: user.username});
        }
        res.status(200).render("error",{data:"Username/Password is wrong"});
    })
    .catch((err) => {
        res.status(500).render("error",{data:err.message});
    })
}

module.exports={
    create,
    login
};