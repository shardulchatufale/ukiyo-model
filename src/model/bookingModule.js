const mongoose = require('mongoose');
const { float } = require('webidl-conversions');

let ObjectId = mongoose.Schema.Types.ObjectId

const bookingModule = new mongoose.Schema({
    
    user_id:{
        type: ObjectId, ref: "user", required: true
    },
    place_id:{
        type: ObjectId, ref: "place", required: true
    },
    start_Date:{
        type:Date//FORMAT WILL HNDEL IN FRONTEND OR API CREATION
    },
    end_Date:{
        type:Date//FORMAT WILL HNDEL IN FRONTEND OR API CREATION
    },
    prise_per_night:{
        type:Number//we can give float type as per er daigram
    },
    num_night:{
        type:Number
    }

},
    { timestamps: true }

);

module.exports = mongoose.model('booking', bookingModule)