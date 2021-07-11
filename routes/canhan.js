const express = require('express');
const body = require('body-parser');
const router = express.Router();
const canhanController = require('../controllers/CaNhanController');

router.use(body.urlencoded({ extended: false }))
 
// parse application/json
router.use(body.json())

router.use(express.static('public'))

router.get('/', canhanController.canhan);

router.post('/sendinfor', canhanController.saveKhachhang);

router.get('/doimatkhau', canhanController.doimatkhau);

router.post('/doimatkhauPost', canhanController.doimatkhauPost);

module.exports = router;