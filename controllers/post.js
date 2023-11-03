const Post = require('../models/post');

exports.createPost = async (req, res, next) => {
    try {
        const { title, desc } = req.body;
        console.log(title, desc);
        const newPost = new Post({
            title,
            desc,
        });

        await newPost.save();

        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
};