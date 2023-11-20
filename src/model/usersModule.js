const mongoose = require('mongoose');



const userModule = new mongoose.Schema({
    email: {
        type: String
    }
},
    { timestamps: true }

);

module.exports = mongoose.model('user', userModule)