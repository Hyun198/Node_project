const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/post');
const { renderMain } = require('../controllers/page');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');


router.get('/', isNotLoggedIn, renderMain);

router.post('/create-post', createPost, isLoggedIn);


module.exports = router;