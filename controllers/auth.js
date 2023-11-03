const User = require('../models/user');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.send('해당 이메일의 사용자를 찾을 수 없습니다.');
        } else {
            const isPasswordValid = await user.comparePassword(password);
            if (isPasswordValid) {
                req.session.user = user;
                console.log('로그인 성공');
                res.redirect('/');
            } else {
                res.send('비밀번호 불일치');
            }
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