const mongoose = require('mongoose');

//Setting up customer schema
const customerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    tel: String,
    email: String,
    password: String,
    address: {
        city: String,
        street: String,
        state: String,
        zip: String,
        country: String
    }
});

module.exports = mongoose.model('customer', customerSchema);