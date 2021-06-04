const express = require('express');
const router = express.Router();

const homeController = require('../controllers/HomeController.js');
var cookieParser = require('cookie-parser')
router.use(cookieParser())

router.get('/', homeController.index);

module.exports = router;