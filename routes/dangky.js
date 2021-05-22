const express = require('express');
const body = require('body-parser');
const router = express.Router();
const DangKyController = require('../controllers/DangKyController');

router.use(body.urlencoded({ extended: false }))
 
// parse application/json
router.use(body.json())

router.use(express.static('public'))

router.get('/', DangKyController.dangky);

router.post('/sendinfor', DangKyController.saveKhachhang);

module.exports = router;