const express = require('express');
const router = express.Router();

const thuonghieuController = require('../controllers/ThuongHieuController.js');
const donghonuController = require('../controllers/DongHoNuController.js');

router.get('/', donghonuController.index);

module.exports = router;