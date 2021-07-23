const express = require('express');
var bodyParser = require('body-parser')
const adsanphamController = require('../controllers/AdsanphamController');

var multer  = require('multer');
var upload = multer();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/client/img/product'); //lat nua cho nay se co new file va khong duoc xoa dong nay
    },
    filename: function (req, file, cb){
      cb(null, file.originalname); // khong duoc xoa  dong nay
    }
});
  
var upload = multer({ storage: storage });

const router = express.Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
router.use(bodyParser.json());

router.get('/update', adsanphamController.update);
router.get('/delete', adsanphamController.deleteSanpham);
router.post('/storeupdate', upload.array('hinhanh', 4), adsanphamController.storeupdate);
router.get('/create', adsanphamController.create);
router.post('/store', upload.array('hinhanh', 4), adsanphamController.store);
router.get('/', adsanphamController.index);

module.exports = router;