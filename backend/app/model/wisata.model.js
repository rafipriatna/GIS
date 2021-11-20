const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const wisataShema = new Shema({
    name: {
        type: String,
        required: true
    },
    travel_category: {
        type: String,
        enum: [
            "Wisata Air",
            "Wisata Keluarga",
            "Cagar Alam"
        ],
        required: true,
    },
    slug: {
        type: String,
        required: true
    },
    location: {
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    galleries: [{
        foto: {
            type: String,
            required: true
        }
    }],
    facilities: [{
        name: {
            type: String,
            required: true
        }
    }],
    thumbnail: {
        type: String,
        required: true
    },
}, {
    collection: 'wisata'
})


module.exports = mongoose.model('wisata', wisataShema)