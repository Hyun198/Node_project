const express = require('express');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const connectDB = require('./models/index');
const indexRouter = require('./routes/main');
const authRouter = require('./routes/auth');
require('dotenv').config();



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use('/', indexRouter);
app.use('/auth', authRouter);



//database 
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
});