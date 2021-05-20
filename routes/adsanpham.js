const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser')
const adsanphamController = require('../controllers/AdsanphamController.js');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
router.use(bodyParser.json())

router.get('/create', adsanphamController.create);
router.post('/store', adsanphamController.store);
router.get('/', adsanphamController.index);

module.exports = router;