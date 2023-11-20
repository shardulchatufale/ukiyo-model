const mongoose = require('mongoose');

let ObjectId = mongoose.Schema.Types.ObjectId

const placeModule = new mongoose.Schema({
    address: {
        type: String///it will handel in front end or at the timr of api creation using rejex
    },

    city_id: {
        type: ObjectId, ref: "city", required: true
    },

    host_id: {
        type: ObjectId, ref: "host", required: true
    }
},
    { timestamps: true }

);

module.exports = mongoose.model('place', placeModule)