const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();

const adlienheController = require('../controllers/AdlienheController');


router.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
router.use(bodyParser.json());

router.get('/deleteLH', adlienheController.deleteLH);
router.get('/', adlienheController.loadlienhe);



module.exports = router;