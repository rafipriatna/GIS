const modelWisata = require('../model/wisata.model');
const multer = require('multer');
const fs = require('fs');
const { model } = require('mongoose');
const lokasiGambar = 'public/images/'

const filter = (req, file, callback) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        callback(null, true)
    } else {
        callback(null, false)
    }
}

const uploadImg = multer({
    dest: lokasiGambar,
    limits: { fieldSize: 1024 * 1024 * 3 },
    fileFilter: filter
}).array('photo')

const uploadImg1 = multer({
    dest: lokasiGambar,
    limits: { fieldSize: 1024 * 1024 * 3 },
    fileFilter: filter
}).single('photo')

exports.inputWisata = (req, res) => {
    //upload gambar
    uploadImg(req, res, function(error) {
        if (error) {
            // jika error jalankan pesan error
            return res.status(500).json(error)
        } else {
            let gallery = [];
            req.file.map((file) => {
                    gallery.push({
                        foto: file.filename
                    })
                })
                // deklarasi variabel
            const data = {
                name: req.body.name,
                travel_category: req.body.kategori,
                location: req.body.location,
                description: req.body.description,
                galleries: gallery,
                facilities: req.body.facilities,
                events: req.body.events
            }

            // masukkan file
            const saveDb = new modelArtikel(data)
            saveDb.save()
                .then(saveDb => {
                    return res.status(200).json({
                        message: 'Tempat wisata berhasil di tambahakan!'
                    })
                }).catch((error) => {
                    res.status(500).json(error)
                })
        }
    })
}

//ubah tempat wisata
exports.ubaWisata = (req, res) => {
    //upload foto
    model.findByIdAndUpdate(
        req.params.id,
        req.body, {
            upsert: true,
            new: true
        },
        function(error, data) {
            if (error) {
                return res.status(500).json(error)
                res.status(200).json({
                    message: 'Berhasil diubah!',
                    data: data
                })
            }
        }
    )
}

exports.tambahFoto = (req, res) => {
    uploadImg1(req, res, (error) => {
        if (error) {
            res.status(500).json({
                message: 'file upload error, Format file harus JPG atau PNG'
            })
        } else {
            model.findById(req.params.id, function(error, data) {
                if (error) {
                    return res.status(500).json(error);
                }
                let foto_galeri = [];
                //looping dengan map
                data.foto_galeri.map((file) => foto_galeri.push(file));
                foto_galeri.push({ file: req.file.filename });
                model.updateOne({ _id: req.params.id }, { foto_galeri: foto_galeri },
                    function(error) {
                        if (error) {
                            return res.status(500).json(error)
                        } else {
                            return res.status(200).json({
                                message: 'Berhasil menambahkan foto!',
                                data: data
                            })
                        }
                    }
                )
            })
        }
    })
}

//hapus foto
exports.hapusFoto = (req, res) => {
    model.findById(req.params.id, function(error, data) {
        if (error) {
            return res.status(500).json(error)
        }
        if (fs.existsSync(path + req.body.file)) {
            fs.unlinkSync(path + req.body.file)
        }
        foto_galeri = [];
        data.foto_galeri
            .filter((file) => file.file != req.body.file)
            .map((file) => foto_galeri.push(file))
        model.updateOne({ _id: req.params.id }, { foto_galeri: foto_galeri },
            function(error) {
                if (error) {
                    return res.status(500).json(error)
                    res.status(200).json({
                        message: 'Berhasil menghapus foto!'
                    })
                }
            }
        )
    })
}

//
exports.hapusWisata = (req, res) => {
    modelArtikel
        .findByIdAndDelete(req.params.id, function(error, artikel) {
            if (error) {
                return res.status(500).json(error)
            } else {
                if (fs.existsSync(lokasiGambar + artikel.gambar)) {
                    fs.unlinkSync(lokasiGambar + artikel.gambar)
                }
                console.log(lokasiGambar + artikel.gambar)
                res.status(200).json({
                    message: 'Data artikel berhasil dihapus!'
                })
            }
        })
}

//tampilkan data wisata
exports.listWisata = (req, res) => {
    modelWisata
        .find()
        .then(listWisata => {
            return res.status(200).json({
                message: 'Daftar tempat wisata',
                date: listWisata
            })
        }).catch((error) => {
            req.status(500).json(error)
        })
}