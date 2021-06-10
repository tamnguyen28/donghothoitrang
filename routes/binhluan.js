const express = require('express');
const router = express.Router();

const binhluanController = require('../controllers/BinhLuanController');

router.get('/', binhluanController.index);

module.exports = router;