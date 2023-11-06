const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: false,

    }, async (email, password, done) => {
        const user = await User.findOne({ email });

        if (!user) {
            return done(null, false, { message: '등록되지 않은 사용자입니다.' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return done(null, false, { message: '비밀번호가 일치하지 않습니다.' });

        }

        return done(null, user);
    }));
}
