const express = require('express');
const body = require('body-parser');
const router = express.Router();

const donhangController = require('../controllers/DonHangController');

router.use(body.urlencoded({ extended: false }))
 
// parse application/json
router.use(body.json())

router.use(express.static('public'));

router.get('/', donhangController.index);
router.post('/savethongtin', donhangController.savethongtin);
router.get('/create_payment_url', donhangController.thanhtoanVNP);
router.get('/getFee', donhangController.getFee);

module.exports = router;
