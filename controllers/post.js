const Post = require('../models/post');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'public/uploads/';

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


exports.createPost = upload.single('img'), async (req, res, next) => {
    try {
        const { title, desc } = req.body;
        const newPost = new Post({
            title,
            desc,
            img: req.file.buffer,
            author: req.user._id
        });

        await newPost.save();

        res.redirect('/post/posts');
    } catch (error) {
        console.error(error);
        next(error);
    }
};

