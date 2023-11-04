const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.send('해당 이메일의 사용자를 찾을 수 없습니다.');
        } else {
            bcrypt.compare(password, user.password, function (err, match) {
                if (err) {
                    return next(err);
                }
                if (!match) {
                    return res.status(401).json({ messagE: '비밀번호가 일치하지 않습니다.' });
                }
                res.redirect('/');
            });
        }
    } catch (err) {
        console.error(err);
        res.send('로그인 오류');
    }
};

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('세션 제거 오류: ', err);
            res.send('로그아웃 실패');
        } else {
            res.send('로그아웃 성공');
        }
    })
}