const express = require('express');
const router = express.Router();

const adtimkiemController = require('../controllers/AdtimkiemController')


router.get('/', adtimkiemController.search);
router.get('/searchCustomer', adtimkiemController.searchkhachhang);

module.exports = router;