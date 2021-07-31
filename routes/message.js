const express = require('express');
const router = express.Router();
const messageController = require('../controllers/MessageController.js');

router.use(express.static('public'))

router.get('/', messageController.index);

module.exports = router;