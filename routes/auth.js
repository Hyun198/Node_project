const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares/login_logout');
const { renderMain } = require('../controllers/page');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', authController.register, isNotLoggedIn);

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', authController.login, isNotLoggedIn);

router.get('/logout', authController.logout, isLoggedIn);


module.exports = router;