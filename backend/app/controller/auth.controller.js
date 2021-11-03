require('dotenv').config()
const modelAdmin = require('../model/admin.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
    modelAdmin
        .find()
        .then(user => {
            if (user.length > 0) {
                return res.status(403).json({
                    message: "Tidak bisa menambahkan akun"
                })
            }
            const newadmin = new modelAdmin(req.body)
            newadmin.save()
                .then(user => {
                    return res.status(200).json({
                        message: 'User berhasil terdaftar'
                    })
                }).catch((error) => {
                    res.status(500).json(error)
                })
        }).catch((error) => {
            res.status(500).json(error)
        })
}

exports.login = (req, res) => {
    modelAdmin
        .findOne({
            email: req.body.email
        }).then(async user => {
            if (!user) {
                res.status(404).json({
                    message: 'User belum terdaftar!'
                })
            } else {
                const token = await cekLogin(req.body, user)
                if (!token) {
                    res.status(401).json({
                        message: 'Password anda salah'
                    })
                } else {
                    res.status(200).json({
                        message: 'Berhasil masuk',
                        token: token
                    })
                }
            }
        }).catch(error => {
            res.status(500).json(error)
        })
}

async function cekLogin(getInput, getDb) {
    return bcrypt
        .compare(getInput.password, getDb.password)
        .then(ada => {
            if (!ada) {
                return false
            } else {
                const payload = {
                    _id: getDb._id
                }
                return jwt.sign(payload, process.env.MONGO_SECRET, {
                    expiresIn: 604800
                })
            }
        }).catch(() => {
            return false
        })
}

exports.listAdmin = (req, res) => {
    modelAdmin
        .find()
        .then(listAdmin => {
            return res.status(200).json({
                message: 'Daftar admin',
                date: listAdmin
            })
        }).catch((error) => {
            req.status(500).json(error)
        })
}