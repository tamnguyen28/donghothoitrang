const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();

const adloaisanphamController = require('../controllers/AdloaisanphamController');


router.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
router.use(bodyParser.json());

router.get('/updateLSP', adloaisanphamController.updateLSP);
router.post('/updateloaisp', adloaisanphamController.updateloaisp);
router.get('/deleteLSP', adloaisanphamController.deleteLSP);
router.get('/createLSP', adloaisanphamController.createLSP);
router.post('/createloaisp', adloaisanphamController.createloaisp);
router.get('/', adloaisanphamController.loaisanpham);



module.exports = router;