const express = require('express');
const body = require('body-parser');
const router = express.Router();
const adcanhanController = require('../controllers/AdcanhanController');

router.use(body.urlencoded({ extended: false }))
 
// parse application/json
router.use(body.json())

router.use(express.static('public'))

router.get('/', adcanhanController.canhan);

router.post('/sendinfor', adcanhanController.saveCanhan);

module.exports = router;