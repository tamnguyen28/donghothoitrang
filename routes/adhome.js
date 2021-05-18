const express = require('express');
const router = express.Router();

const adhomeController = require('../controllers/AdhomeController.js');

router.get('/', adhomeController.index);

module.exports = router;