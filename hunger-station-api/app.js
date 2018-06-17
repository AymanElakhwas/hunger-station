const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Routing configs
const restaurantRoutes = require('./routes/restaurant')

//Mongoos connection
mongoose.connect(
    'mongodb://localhost:27017/hunger-station-db'
);

//Logging http operations
app.use(morgan("dev"));

//Body payload parser setting
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS setting
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

//Routing requests
app.use("/restaurants", restaurantRoutes);

//Error handlers
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
