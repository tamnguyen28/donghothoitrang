const express = require('express');
const router = express.Router();

const addonhangController = require('../controllers/AddonhangController');

router.get('/updateStatusCancelOrder', addonhangController.updateStatusCancel);
router.get('/updatestatuscancel', addonhangController.updatestatuscancel);
router.get('/detailOrderCancel', addonhangController.detailOrderCancel);
router.get('/donhangdahuy', addonhangController.donhangdahuy);
router.get('/cancelOrder', addonhangController.cancelOrder);
router.get('/detailOrder', addonhangController.detailOrder);
router.get('/doanhthunam', addonhangController.doanhthunam);
router.get('/doanhthu', addonhangController.doanhthu);
router.get('/updateStatus', addonhangController.updateStatus);
router.get('/updateOrder', addonhangController.updateOrder);
router.get('/', addonhangController.donhang);
router.get('/order', addonhangController.getOrderByOrderId);
module.exports = router;
