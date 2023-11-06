exports.renderMain = (req, res, next) => {
    const username = req.user ? req.user.username : null;
    res.render('main', { username });
};


exports.renderRegister = (req, res) => {
    res.render('register');
}


exports.renderLogin = (req, res) => {
    res.render('login');
}