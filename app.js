const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
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
//passport setup
app.use(passport.initialize());
app.use(passport.session());

//route setup
app.use('/', indexRouter);
app.use('/auth', authRouter);

//database setup
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
});