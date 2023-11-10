const express = require('express');
const { renderMain, renderLogin, renderRegister, renderPosts, rendercreatePost } = require('../controllers/page');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get('/', renderMain);

router.get('/register', renderRegister, isNotLoggedIn);

router.get('/login', renderLogin);

router.get('/posts', renderPosts, isLoggedIn);


module.exports = router;
