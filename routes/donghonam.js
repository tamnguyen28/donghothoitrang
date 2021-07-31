const express = require('express');
const router = express.Router();

const thuonghieuController = require('../controllers/ThuongHieuController.js');
const donghonamController = require('../controllers/DongHoNamController.js');
const { route } = require('./donghonu.js');

router.use(express.static('public'))

router.get('/', donghonamController.index);
router.get('/locgia', donghonamController.locgia);

module.exports = router;