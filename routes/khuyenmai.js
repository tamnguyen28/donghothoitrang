const express = require('express');
const router = express.Router();

const khuyenmaiController = require('../controllers/KhuyenMaiController.js');

router.get('/', khuyenmaiController.index);

module.exports = router;