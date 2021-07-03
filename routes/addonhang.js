const express = require('express');
const router = express.Router();

const addonhangController = require('../controllers/AddonhangController');

router.get('/doanhthunam', addonhangController.doanhthunam);
router.get('/doanhthu', addonhangController.doanhthu);
router.get('/updateStatus', addonhangController.updateStatus);
router.get('/updateOrder', addonhangController.updateOrder);
router.get('/deleteOrder', addonhangController.deleteOrder);
router.get('/', addonhangController.donhang);
router.get('/order', addonhangController.getOrderByOrderId);
module.exports = router;
