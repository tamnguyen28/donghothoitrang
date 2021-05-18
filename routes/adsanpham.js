const express = require('express');
const router = express.Router();

const adsanphamController = require('../controllers/AdsanphamController.js');

router.get('/', adsanphamController.index);

module.exports = router;