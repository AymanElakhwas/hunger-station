const mongoose = require('mongoose');

//Setting up restaurant schema
const restaurantSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    phone: String,
    email: String,
    image_url: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String
    },
    location: {
        type: { type: String, default: "Point" },
        coordinates: [Number]
    },
    menu_item: [{
        _id: false,
        id: Number,
        name: String,
        desc: String,
        price: Number,
        img: String
    }]
});

//Adding geo-location index
restaurantSchema.index({ "location": "2dsphere" });

module.exports = mongoose.model('Restaurant', restaurantSchema);