const express = require('express');
const { renderMain, renderLogin, renderRegister, renderPosts } = require('../controllers/page');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get('/', renderMain);

router.get('/auth/register', renderRegister, isNotLoggedIn);

router.get('/auth/login', renderLogin);

router.get('/post/posts', renderPosts, isLoggedIn);

module.exports = router;
