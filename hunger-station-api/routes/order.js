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

router.get('/restaurants/:restaurantId', (req, res, next) => {
    Order.find({"restaurantId" : req.params.restaurantId})
        .exec()
        .then(docs => {
            console.log(docs);
            if (docs.length > 0) {
                res.status(200).json(docs);
            } else {
                res.status(200).json({
                    error: 'No entries found'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(200).json({
                error: err
            });
        });
});

module.exports = router;