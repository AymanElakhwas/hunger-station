const mongoose = require('mongoose');

//Setting up order schema
const orderSchema = mongoose.Schema({
    customerName: String,
    customerTel: String,
    customerAddress: {
        city: String,
        street: String,
        state: String,
        zip: String,
        country: String
    },
    restaurantId: String,
    subtotal: Number,
    delivery: Number,
    total: Number,
    items: [{
        name: String,
        qty: Number,
        price: Number
    }]
});

module.exports = mongoose.model('order', orderSchema);