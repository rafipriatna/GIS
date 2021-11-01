const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const adminShema = new Shema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    collection: "admin"
})

adminShema.pre('save', function(next) {
    let user = this
    bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(user.password, salt, (error, hash) => {
            user.password = hash
            next()
        })
    })
})

module.exports = mongoose.model('admin', adminShema)