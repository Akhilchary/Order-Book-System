const User = require('../models/user.model')
const md5=require(md5);
const create = (req,res) => {
    User.find({username : req.body.username})
    .then((users) => {
        if(users.length)
        {
            return res.status(200).render("error",{data : "User already exists"});
        }
        const user = new User({
            name : req.body.name,
            username : req.body.username,
            password : md5(req.body.password)
        })
        user.save()
        .then((data) =>{
            return res.status(200).render("home",{username : req.body.username});
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
        if(user.username == req.body.username && user.password == md5(req.body.password))
        {
            if(user.admin == true)
            {
                return res.status(200).render("admin",{data: user.username});
            }
            else
            {
                return res.status(200).render("home",{data: user.username});
            }
        }
        return res.status(200).render("error",{data:"Username/Password is wrong"});
    })
    .catch((err) => {
        return res.status(500).render("error",{data:err.message});
    })
}

module.exports={
    create,
    login
};
