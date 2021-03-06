const modelWisata = require('../model/wisata.model');
const lokasiGambar = 'public/images/';
const multer = require('multer');
const fs = require('fs');

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
}).single('file')

exports.inputWisata = (req, res) => {
    uploadImg(req, res, (error) => {
        if (error) {
            return res.status(500).json(error)
        } else {
            const slug = slugGenerator(req.body.name)

            const data = {
                name: req.body.name,
                travel_category: req.body.travel_category,
                slug: slug,
                location: JSON.parse(req.body.location),
                description: req.body.description,
                facilities: req.body.facilities,
                thumbnail: req.file.filename,
                ticket_price: req.body.ticket_price,
                operational: JSON.parse(req.body.operational)
            }

            // Simpan data
            const saveDb = new modelWisata(data)
            saveDb.save()
                .then(dataDB => {
                    return res.status(200).json({
                        message: 'Tempat wisata berhasil ditambahakan!',
                        data: dataDB
                    })
                }).catch((error) => {
                    console.log(error)
                    res.status(500).json(error)
                })
        }
    })
}

//ubah tempat wisata
exports.ubaWisata = (req, res) => {
    uploadImg(req, res, (error) => {
        if (error) {
            return res.status(500).json(error)
        } else {

            let data = {}

            if (req.file) {
                data = {
                    name: req.body.name,
                    travel_category: req.body.travel_category,
                    location: JSON.parse(req.body.location),
                    description: req.body.description,
                    facilities: req.body.facilities,
                    thumbnail: req.file.filename,
                    ticket_price: req.body.ticket_price,
                    operational: JSON.parse(req.body.operational)
                }
            } else {
                data = {
                    name: req.body.name,
                    travel_category: req.body.travel_category,
                    location: JSON.parse(req.body.location),
                    description: req.body.description,
                    facilities: req.body.facilities,
                    ticket_price: req.body.ticket_price,
                    operational: JSON.parse(req.body.operational)
                }
            }

            modelWisata.findByIdAndUpdate(
                req.params.id,
                data, {
                upsert: true,
                new: true
            },
                function (error, data) {
                    if (error)
                        return res.status(500).json(error)
                    res.status(200).json({
                        message: 'Berhasil diubah!',
                        data: data
                    })
                }
            )

        }
    })
}

// tambah foto
exports.tambahFoto = (req, res) => {
    uploadImg(req, res, (error) => {
        if (error) {
            return res.status(500).json(error)
        } else {
            modelWisata.findById(req.params.id, function (error, data) {
                if (error) {
                    return res.status(500).json(error);
                }
                let foto_galeri = [];
                data.galleries.map((file) => foto_galeri.push(file));
                foto_galeri.push({ photo: req.file.filename });
                modelWisata.updateOne({ _id: req.params.id }, { galleries: foto_galeri },
                    function (error) {
                        if (error)
                            return res.status(500).json(error)
                    }
                )
            })
        }
    })
}

//hapus foto
exports.hapusFoto = (req, res) => {
    modelWisata.findById(req.params.id, function (error, data) {
        if (error) {
            return res.status(500).json(error)
        }
        if (fs.existsSync(lokasiGambar + req.body.file)) {
            fs.unlinkSync(lokasiGambar + req.body.file)
        }
        foto_galeri = [];
        data.galleries
            .filter((file) => file.photo != req.body.file)
            .map((file) => foto_galeri.push({ photo: file.photo }))
        modelWisata.updateOne({ _id: req.params.id }, { galleries: foto_galeri },
            function (error) {
                if (error)
                    return res.status(500).json(error)
            }
        )
    })
}

//
exports.hapusWisata = (req, res) => {
    modelWisata
        .findByIdAndDelete(req.params.id, function (error, data) {
            if (error) {
                return res.status(500).json(error)
            } else {

                // Looping hapus gambar
                data.galleries.map(file => {
                    if (fs.existsSync(lokasiGambar + file.photo)) {
                        fs.unlinkSync(lokasiGambar + file.photo)
                    }
                })

                res.status(200).json({
                    message: 'Data berhasil dihapus!'
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
                data: listWisata
            })
        }).catch((error) => {
            req.status(500).json(error)
        })
}

//tampilkan data wisata berdasarkan ID
exports.getWisataById = (req, res) => {
    modelWisata
        .findById(req.params.id)
        .then(data => {
            return res.status(200).json({
                message: 'Detail tempat wisata',
                data: data
            })
        }).catch((error) => {
            req.status(500).json(error)
        })
}

//tampilkan data wisata berdasarkan ID
exports.getWisataBySlug = (req, res) => {
    modelWisata
        .find({
            slug: req.params.slug
        })
        .then(data => {
            return res.status(200).json({
                message: 'Detail tempat wisata',
                data: data
            })
        }).catch((error) => {
            req.status(500).json(error)
        })
}


const slugGenerator = title => {
    let slug;

    slug = title.toLowerCase();

    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');

    slug = slug.replace(/ /gi, "-");

    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');

    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    return slug;
};