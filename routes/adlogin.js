const express = require('express');
const body = require('body-parser');
const router = express.Router();

const cookieParser = require('cookie-parser');

const adloginController = require('../controllers/AdloginController.js');



router.use(cookieParser())
router.use(body.urlencoded({extends:false}))

router.use(body.json())
router.use(express.static('public'))

router.get('/logout', adloginController.logout);
router.get('/', adloginController.login);
router.post('/', adloginController.postLogin);

module.exports = router;