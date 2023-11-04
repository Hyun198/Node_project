exports.renderMain = (req, res, next) => {
    const username = req.user ? req.user.username : null;
    res.render('main', { username });
};