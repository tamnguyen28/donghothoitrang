const express = require('express');
const router = express.Router();

const thuonghieuController = require('../controllers/ThuongHieuController.js');

router.use(express.static('public'))

router.get('/', thuonghieuController.index);
router.get('/getproductbytranmarkid', thuonghieuController.getProductByTranmarkId);

module.exports = router;