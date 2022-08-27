const express = require('express');
// const fetch = require("node-fetch");
// const cors = require("cors");
const mongoose = require('mongoose');
const User = require('./models/user.model');
// const userRoutes = require('./routes/user.route');
const userController = require('./controllers/user.controller');
const app = express();
const dbURI = "mongodb+srv://noobguy77:pass@cluster0.gaovqwk.mongodb.net/?retryWrites=true&w=majority";
app.set('view engine','ejs');
app.use(express.urlencoded({extended: true}));
// app.options("*", cors());
// app.use(userRoutes);

mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(6969,()=>{
        console.log("Running in your mum client")
        console.log("Db success");
    })
})
.catch((err) =>{
    console.log("Error!",err);
})

app.get('/', (req,res) =>{
    res.render("home",{data:null});
})

app.get('/login',(req,res) => {
    res.render('login');
})

app.get('/register',(req,res) => {
    res.render('register');
})
app.get('/customer',(req,res)=>{
    res.render('Customer');
})


app.post('/register',userController.create);

app.post('/login',userController.login);
