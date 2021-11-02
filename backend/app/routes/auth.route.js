const express = require('express');
const controller = require('../controller/auth.controller');
const controllerWisata = require('../controller/wisata.controller');
const router = express.Router()

router.post('/', controllerWisata.listWisata)
router.post('/login', controller.login)
router.post('/register', controller.register)


module.exports = router