const User = require('../models/user');

exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const newUser = new User({
            username,
            email,
            password,
        });

        await newUser.save();
        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
}