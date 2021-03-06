const express = require('express');
const router = express.Router();

const UserController = require('../controller/users');

// app.js 경로 뒤에 붙여지는 주소
router.post('/email_check', UserController.emailCheckAPI);
router.get('/signup', UserController.getUserAPI);
router.post('/signup', UserController.signupAPI);
router.post('/login', UserController.loginAPI);

module.exports = router;