const express = require('express');
const passport = require('passport');
const controller = require('../controller/auth.controller');
const router = express.Router()

router.post('/login', controller.login)
router.post('/register', controller.register)
router.get(
    "/",
    passport.authenticate("adminAuth", {
        session: false,
    }),
    (req, res) => {
        return res.status(200).json({
            message: "Data user yang login.",
            user: req.user
        });
    }
);


module.exports = router