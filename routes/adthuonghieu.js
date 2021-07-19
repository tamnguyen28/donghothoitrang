const express = require('express');
var bodyParser = require('body-parser');

const adthuonghieuController = require('../controllers/AdthuonghieuController');
const router = express.Router();

var multer = require('multer');
var upload = multer();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/client/img/thuonghieu'); //lat nua cho nay se co new file va khong duoc xoa dong nay
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+'.jpg')// khong duoc xoa  dong nay
    }
})
  
var upload = multer({ storage: storage });

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
router.use(bodyParser.json());

router.get('/deletetrademark', adthuonghieuController.deletetrademark);
router.get('/updatethuonghieu', adthuonghieuController.updatethuonghieu);
router.post('/updatetrademark', upload.single('hinhanh'), adthuonghieuController.updatetrademark);
router.get('/createthuonghieu', adthuonghieuController.createthuonghieu);
router.post('/createThuongHieu', upload.single('hinhanh'), adthuonghieuController.createThuongHieu);
router.get('/', adthuonghieuController.thuonghieu);

module.exports = router;