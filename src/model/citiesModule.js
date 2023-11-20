const mongoose = require('mongoose');

let ObjectId = mongoose.Schema.Types.ObjectId

const citiesModule = new mongoose.Schema({
cityName:{
    type:String
},

country_id:{
    type: ObjectId, ref: "country", required: true
}
  
},
{timestamps: true }

);

module.exports = mongoose.model('city', citiesModule)