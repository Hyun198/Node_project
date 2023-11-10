const Post = require('../models/post');
const multer = require('multer');
const fs = require('fs');
const path = require('path');


exports.createPost = async (req, res, next) => {
    try {
        const { title, desc } = req.body;
        const newPost = new Post({
            title,
            desc,
            author: req.user._id
        });

        await newPost.save();

        res.redirect('/');
    } catch (error) {
        console.error(error);
        next(error);
    }
};

