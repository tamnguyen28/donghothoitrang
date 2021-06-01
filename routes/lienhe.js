const express = require('express');
const router = express.Router();
const body = require('body-parser');

const lienheController = require('../controllers/LienHeController.js');

router.use(body.urlencoded({ extended: false }))
// parse application/json
router.use(body.json())

router.use(express.static('public'))

router.get('/', lienheController.index);

router.post('/sendmess', lienheController.savemess);

module.exports = router;