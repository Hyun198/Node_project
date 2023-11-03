const express = require('express');
const router = express.Router();
const registerController = require('../controllers/user');
const authController = require('../controllers/auth');

router.get('/', (req, res) => {
    res.render('register');
});

router.post('/register', registerController.register);

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login', authController.login);

router.get('/logout', authController.logout);


module.exports = router;