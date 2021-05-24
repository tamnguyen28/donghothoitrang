const express = require('express');
const body = require('body-parser');
const router = express.Router();
const DangNhapController = require('../controllers/DangNhapController');

router.use(body.urlencoded({ extended: false }))
 
// parse application/json
router.use(body.json())

router.use(express.static('public'))

router.get('/', DangNhapController.dangnhap);
router.post('/dangnhap', DangNhapController.postLogin);


module.exports = router;