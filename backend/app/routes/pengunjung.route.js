const express = require('express');
const controller = require('../controller/wisata.controller');
const router = express.Router();

router.get('/', controller.listWisata);

module.exports = router