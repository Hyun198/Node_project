const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/post');

const { isLoggedIn, isNotLoggedIn } = require('../middlewares');



router.post('/create', createPost, isLoggedIn);


module.exports = router;