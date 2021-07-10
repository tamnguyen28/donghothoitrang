const express = require('express');
const router = express.Router();

const lichsumuahangController = require('../controllers/LichSuMuaHangController.js');

router.use(express.static('public'))

router.get('/', lichsumuahangController.index);
router.get('/chitietdonhang', lichsumuahangController.xemdonhang);
router.get('/huydonhang', lichsumuahangController.huydonhang);

module.exports = router;