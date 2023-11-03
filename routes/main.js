const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');


router.get('/', (req, res) => {
    res.render('main');
});

router.post('/create-post', postController.createPost);

module.exports = router;