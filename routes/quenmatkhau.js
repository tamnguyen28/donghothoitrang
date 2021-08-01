const express = require('express');
const router = express.Router();
const body = require('body-parser');

const quenmatkhauController = require('../controllers/QuenMatKhauController.js');

router.use(body.urlencoded({ extended: false }));
// parse application/json
router.use(body.json());

router.use(express.static('public'));

router.post('/sendmail', quenmatkhauController.sendMail);
router.get("/email", quenmatkhauController.index);
router.get("/matkhaumoi", quenmatkhauController.matkhau);
router.post('/updatematkhau', quenmatkhauController.updateMatKhau);



module.exports = router;