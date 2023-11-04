const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const { renderMain } = require('../controllers/page');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/login_logout');

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get('/', isNotLoggedIn, renderMain);


router.post('/create-post', postController.createPost);

module.exports = router;