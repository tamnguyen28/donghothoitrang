const express = require('express');
var bodyParser = require('body-parser');

const adtintucController = require('../controllers/AdtintucController');
const router = express.Router();

var multer = require('multer');
var upload = multer();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/client/img/tintuc'); //lat nua cho nay se co new file va khong duoc xoa dong nay
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

router.get('/deleteblog', adtintucController.deleteblog);
router.get('/updateblog', adtintucController.updateblog);
router.post('/updatetintuc', upload.single('hinhanh'), adtintucController.updatetintuc);
router.get('/createblog', adtintucController.createblog);
router.post('/createtintuc', upload.single('hinhanh'), adtintucController.createtintuc);
router.get('/', adtintucController.tintuc);

module.exports = router;