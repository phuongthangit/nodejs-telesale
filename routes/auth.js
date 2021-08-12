const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');
const LinkName = require('../constants/linkName');

router.get(LinkName.LOGIN,authController.login);
router.get(LinkName.REGISTER,authController.register);
router.get(LinkName.FORGOT_PASSWORD,authController.forgotPassword);
module.exports = router;