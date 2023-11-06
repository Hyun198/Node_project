const User = require('../models/user');
const passport = require('passport');
const bcrypt = require('bcrypt');
const LocalStrategy = require('../passport/localStrategy');

passport.use('local', LocalStrategy);

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const exUser = await User.findOne({ email });
        if (exUser) {
            return res.send('이미 회원이 존재합니다.');
        }
        const hash = await bcrypt.hash(password, 12);
        const newUser = new User({
            username,
            email,
            password: hash,
        });

        await newUser.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
}

exports.login = (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            return res.redirect(`/?error=${info.message}`);
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        })
    })(req, res, next);
};

exports.logout = (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
}