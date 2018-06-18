const express = require("express");
const router = express.Router();
const Order = require("../models/order");


router.post('/', (req, res, next) => {
    Order.create(req.body, function (err, cus) {
        if (err) {
            console.log(err);
            res.status(500).json({
                error: err
            });
        } else {
            res.json({ 'message': 'success' });
        }
    });
});

module.exports = router;