const express = require('express');
const router = express.Router();

const tintucController = require('../controllers/TinTucController.js');

router.get('/', tintucController.index);

module.exports = router;