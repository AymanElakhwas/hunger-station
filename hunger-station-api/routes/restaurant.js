const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant");

router.get("/", (req, res, next) => {
    // We need to get the customer's location 
    // to search the nearest restaurants

    //Retrieve all restaurants
    Restaurant.find()
        .exec()
        .then(docs => {
            console.log(docs);
            if (docs.length > 0) {
                res.status(200).json(docs);
            } else {
                res.status(404).json({
                    message: 'No entries found'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get("/:restaurantId", (req, res, next) => {
    
    console.log('Getting Resturant by ID: ' + req.params.restaurantId);

    Restaurant.findById(req.params.restaurantId)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
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