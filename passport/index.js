const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');


module.exports = () => {
    // 세션 직렬화
    passport.serializeUser((user, done) => {
        done(null, user.id); // 세션에 사용자 ID를 저장
    });

    // 세션 역직렬화
    passport.deserializeUser(async (id, done) => {
        const user = await User.findById(id);
        done(null, user);
    });
    local();
};

