const express = require('express');
const router = express.Router();
const campaignController = require('../app/controllers/CampaignController');
const LinkName = require('../constants/linkName');

router.get(LinkName.CREATE,campaignController.create);
router.get('/:id',campaignController.edit);

module.exports = router;