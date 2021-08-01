const express = require('express');
const router = express.Router();
const body = require('body-parser');

const adquenmatkhauController = require('../controllers/AdquenmatkhauController.js');

router.use(body.urlencoded({ extended: false }));
// parse application/json
router.use(body.json());

router.use(express.static('public'));

router.post('/sendmail', adquenmatkhauController.sendMail);
router.get('/email', adquenmatkhauController.index);
router.get('/matkhaumoi', adquenmatkhauController.matkhau);
router.post('/updatematkhau', adquenmatkhauController.updateMatKhau);
module.exports = router;
