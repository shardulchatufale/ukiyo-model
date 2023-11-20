const mongoose = require('mongoose');

let ObjectId = mongoose.Schema.Types.ObjectId

const reviewModule = new mongoose.Schema({
    booking_id: {
        type: ObjectId, ref: "booking", required: true
    },
    rating: {
        type: Number,
        minlength: 1,
        maxlength: 5,
    },
    reviewbody: {
        type: String
    }
},
    { timestamps: true }

);

module.exports = mongoose.model('review', reviewModule)