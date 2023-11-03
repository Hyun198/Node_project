const express = require('express');
const router = express.Router();
const registerController = require('../controllers/user');

router.get('/', (req, res) => {
    res.render('register');
});

router.post('/register', registerController.register);

module.exports = router;