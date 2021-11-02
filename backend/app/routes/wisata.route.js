const express = require('express');
const controller = require('../controller/wisata.controller');
const passport = require('passport');
const router = express.Router();

router.post('/', passport.authenticate('adminAuth', {
    session: false
}), controller.inputWisata)

router.get('/', passport.authenticate('adminAuth', {
    session: false
}), controller.listWisata)

router.get('/', passport.authenticate('adminAuth', {
    session: false
}), controller.ubaWisata)

router.get('/', passport.authenticate('adminAuth', {
    session: false
}), controller.hapusFoto)

router.get('/', passport.authenticate('adminAuth', {
    session: false
}), controller.tambahFoto)

router.get('/', passport.authenticate('adminAuth', {
    session: false
}), controller.hapusWisata)

module.exports = router