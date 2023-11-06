const Post = require('../models/post');

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


exports.renderPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.render('posts', { posts });
    } catch (err) {
        console.error(err);
        res.send('게시글 목록을 불러오는 중 오류 발생');
    }
}