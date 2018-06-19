const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant");
const mongodb = require('mongodb');

router.get("/", (req, res, next) => {
    // We need to get the customer's location 
    // to search the nearest restaurants

    //Retrieve all restaurants
    Restaurant.find()
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                res.status(200).json(docs);
            } else {
                res.status(200).json({
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

router.put("/:id", (req, res, next) => {
    Restaurant.findOneAndUpdate({ "_id": mongodb.ObjectID(req.params.id) }, { $push: { "menu_item": req.body } }, function (err, rest) {
        if (err) {
            console.log(err);
            res.status(500).json({
                error: "err"
            });
        } else {
            res.json({ 'message': 'success' });
        }
    });

});

router.get("/:longitude/:latitude/", (req, res, next) => {
    query = {
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [req.params.longitude, req.params.latitude]
                }
            }
        }
    };
    const page = parseInt(req.query.page)
    const size = 10;
   
    if (page < 0 || page === 0) {
        return res.status(500).json({ message: "Invalid page number." })
    }
    const s = size * (page - 1)
    const l = size
    const totalCount = Restaurant.count({}, (err, c) => {
        const totalPages = Math.ceil(c / size)
        if (page > totalPages) {
            res.end(); //fail safe incase unavailable page gets accessed through api
        }
    });

    Restaurant.find(query).skip(s).limit(l)
        .exec()
        .then(docs => {

            if (docs.length > 0) {
                res.status(200).json(docs);
            } else {
                res.status(200).json({
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

module.exports = router;