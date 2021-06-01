const express = require('express');
const router = express.Router();
const body = require('body-parser');

const adloginController = require('../controllers/AdloginController.js');


router.use(body.urlencoded({extends:false}))

router.use(body.json())
router.use(express.static('public'))

router.get('/', adloginController.login);
router.post('/', adloginController.postLogin);

module.exports = router;