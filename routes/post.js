const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/post');
const { renderMain } = require('../controllers/page');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');


router.get('/create', isLoggedIn);

router.post('/create', createPost, isLoggedIn);


module.exports = router;