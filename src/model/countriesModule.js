const mongoose = require('mongoose');


const countryModule = new mongoose.Schema({
    countryCode: {
        type: Schema.Types.Mixed//***********/it will handel in front end or at the timr of api creation using rejex
    },

    countryName: {
        type: String
    }
},
    { timestamps: true }

);

module.exports = mongoose.model('country', countryModule)