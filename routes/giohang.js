const express = require('express');
const router = express.Router();

const giohangController = require('../controllers/GioHangController.js');

router.use(express.static('public'))

router.get('/', giohangController.index);
router.get('/xoagiohang', giohangController.xoagiohang);
router.get('/tinhsoluongvatongtien', giohangController.tinhslvatongtien)
module.exports = router;