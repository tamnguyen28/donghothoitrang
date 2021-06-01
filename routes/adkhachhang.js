const express = require('express');
const router = express.Router();

const adkhachhangController = require('../controllers/AdkhachhangController');

router.get('/', adkhachhangController.khachhang);

router.get('/order', adkhachhangController.getOrderByCustomerId)

module.exports = router;
