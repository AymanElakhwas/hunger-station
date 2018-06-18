const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");
const jwt = require('jsonwebtoken');

router.post('/auth', (req, res, next) => {
    console.log(JSON.stringify(req.body));
    Customer.findOne({ 'email': req.body['username'] }, function (err, cus) {
        if (err) {
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
        if (cus && cus.password == req.body['password']) {
            const token = jwt.sign(JSON.stringify(cus), 'secret');
            res.json({ 'token': token });
        } else {
            res.json({ 'message': 'Invalid Credentials' });
        }
    });
});

module.exports = router;