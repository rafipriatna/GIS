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

router.get('/:id', passport.authenticate('adminAuth', {
    session: false
}), controller.listWisataById)

router.patch('/:id', passport.authenticate('adminAuth', {
    session: false
}), controller.ubaWisata)

router.post('/upload/:id', passport.authenticate('adminAuth', {
    session: false
}), controller.tambahFoto)

router.post('/delete/:id', passport.authenticate('adminAuth', {
    session: false
}), controller.hapusFoto)

router.delete('/:id', passport.authenticate('adminAuth', {
    session: false
}), controller.hapusWisata)

module.exports = router