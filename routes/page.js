const express = require('express');
const { renderMain, renderLogin, renderRegister } = require('../controllers/page');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get('/auth/register', renderRegister, isNotLoggedIn);

router.get('/auth/login', renderLogin);

router.get('/', renderMain);

module.exports = router;
