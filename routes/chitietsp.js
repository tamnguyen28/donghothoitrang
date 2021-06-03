const express = require('express');
const router = express.Router();
const chitietspController = require('../controllers/ChiTietSPController');

router.use(express.static('public'));

router.get('/', chitietspController.index);

module.exports = router;