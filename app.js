const express = require('express');

const session = require('express-session');
const passport = require('passport');
const connectDB = require('./models/index');
const path = require('path');
const passportConfig = require('./passport');
const dotenv = require('dotenv');
const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth');


dotenv.config();
const app = express();
passportConfig();


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
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
//database setup
connectDB();
//route setup
app.use('/', pageRouter);
app.use('/auth', authRouter);



app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
});