const express = require('express');
const router = express.Router();

const thuonghieuController = require('../controllers/ThuongHieuController.js');

router.get('/', thuonghieuController.index);

module.exports = router;