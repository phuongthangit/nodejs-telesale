const express = require('express');
const router = express.Router();
const campaignController = require('../app/controllers/CampaignController');
const LinkName = require('../constants/linkName');

router.get(LinkName.CREATE,campaignController.create);
router.get('/:slug/detail',campaignController.detail);
router.get('/:slug/list/missed',campaignController.listMissed);
router.get('/:slug/list/success',campaignController.listSucess);
router.get('/:id',campaignController.edit);
router.get('/',campaignController.index);

module.exports = router;