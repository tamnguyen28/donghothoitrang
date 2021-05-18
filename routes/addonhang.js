const express = require('express');
const router = express.Router();

const addonhangController = require('../controllers/AddonhangController.js');

router.get('/', addonhangController.index);

module.exports = router;