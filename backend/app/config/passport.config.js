const passportJwt = require('passport-jwt');
const strategyJwt = passportJwt.Strategy;
const extractJwt = passportJwt.ExtractJwt;
const modelAdmin = require('../model/admin.model');
const config = require('../config/mongo.config')

const options = {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
}

module.exports = (passport) => {
    passport.use('adminAuth',
        new strategyJwt(options, (payload, done) => {
            modelAdmin
                .findById(payload._id)
                .then(admin => {
                    if (!admin) {
                        return done(null, false)
                    } else {
                        done(null, admin)
                    }
                }).catch((error) => {
                    return done(null, false, error)
                })
        }))
}