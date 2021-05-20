const express = require('express');
const router = express.Router();
const DangKyController = require('../controllers/DangKyController');

router.get('/', DangKyController.dangky);

module.exports = router;