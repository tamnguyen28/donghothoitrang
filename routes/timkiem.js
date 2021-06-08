const express = require('express');
const router = express.Router();

const timkiemController = require('../controllers/TimKiemController')

router.use(express.static('public'));

router.get('/', timkiemController.search);

module.exports = router;