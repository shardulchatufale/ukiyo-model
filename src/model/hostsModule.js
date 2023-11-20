const mongoose = require('mongoose');

let ObjectId = mongoose.Schema.Types.ObjectId

const hostModule = new mongoose.Schema({

user_id:{
    type: ObjectId, ref: "country", required: true
}
},
    { timestamps: true }

);

module.exports = mongoose.model('host', hostModule)