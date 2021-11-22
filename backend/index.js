const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const path = require("path");

const app = express();
// Memberi batas untuk mengakses API
const allowList_API = ['http://localhost:3000']
const cors_option = {
    Credential: true,
    origin: (origin, callback) => {
        if (allowList_API.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Gagal terhubung ke API!'))
        }
    }
}

app.use(express.static(path.join(__dirname, "public")));

// setting passport
app.use(passport.initialize())
require('./app/config/passport.config')(passport)

app.use(cors(cors_option));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())

// mongodb
const db = require('./app/config/mongo.config');
// mongoose.set("useCreateIndex", true)
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify : true
}).then(() => {
    console.log('Berhasil konek ke database!')
}).catch(error => {
    console.log(error)
})

app.get('/', (req, res) => {
    res.json({
        message: 'API berhasil didapat'
    })
})

// panggil fungsi router
const pengunjung = require('./app/routes/pengunjung.route')
app.use('/api/', pengunjung)

const auth = require('./app/routes/auth.route')
app.use('/api/auth', auth)

const wisata = require('./app/routes/wisata.route')
app.use('/api/admin/wisata', wisata)


// jalankan port
app.listen('7000', () => {
    console.log('Server telah berjalan')
})


// mengubah route dan controller