const express = require('express');
const router = express.Router();
const admessageController = require('../controllers/AdmessageController');

router.use(express.static('public'))

router.get('/', admessageController.index);

module.exports = router;