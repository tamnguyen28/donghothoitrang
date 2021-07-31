const express = require('express');
const router = express.Router();

const thuonghieuController = require('../controllers/ThuongHieuController.js');
const donghonuController = require('../controllers/DongHoNuController.js');

router.use(express.static('public'));

router.get('/', donghonuController.index);
router.get('/locgia', donghonuController.locgia);

module.exports = router;