const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Routing configs
const restaurantRoutes = require('./routes/restaurant')
const customerRoutes = require('./routes/customer')
const orderRoutes = require('./routes/order')

//Mongoos connection
mongoose.connect('mongodb://admin:admin1@ds263670.mlab.com:63670/hunger-station-db');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


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
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);

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
