const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');
const LinkName = require('../constants/linkName');

router.get(LinkName.CREATE,userController.create);
router.get('/:id',userController.edit);

module.exports = router;