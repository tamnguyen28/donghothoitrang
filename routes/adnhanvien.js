const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();

const adnhanvienController = require('../controllers/AdnhanvienController');


router.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
router.use(bodyParser.json());


router.get('/updateNV', adnhanvienController.updateNV);
router.post('/updatenhanvien', adnhanvienController.updatenhanvien);
router.get('/deleteNV', adnhanvienController.deleteNV);
router.get('/createnv', adnhanvienController.createnv);
router.post('/createnhanvien', adnhanvienController.createnhanvien);
router.get('/', adnhanvienController.nhanvien);



module.exports = router;