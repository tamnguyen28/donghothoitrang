const express = require('express');
const router =  express.Router();

const giaohangController = require('../controllers/GiaoHangController');

router.use(express.static('public'));

router.get('/', giaohangController.index);

module.exports = router;
