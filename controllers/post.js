const Post = require('../models/post');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });


exports.createPost = upload.single('img'), async (req, res, next) => {
    try {
        const { title, desc } = req.body;
        const newPost = new Post({
            title,
            desc,
            img: {
                data: req.file.buffer,
                contentType: req.file.mimetype
            },
            author: req.user._id
        });

        await newPost.save();

        res.send("게시글 생성 성공");
    } catch (error) {
        console.error(error);
        next(error);
    }
};

