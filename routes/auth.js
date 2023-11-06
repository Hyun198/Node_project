const express = require('express');
const passport = require('passport');
const { login, logout, register } = require('../controllers/auth');
const { isLoggedIn, isNotLoggedIn } = require('../middlewares');

const router = express.Router();


router.post('/auth/register', register, isNotLoggedIn);

router.post('/login', login, isNotLoggedIn);

router.get('/logout', logout, isLoggedIn);


module.exports = router;