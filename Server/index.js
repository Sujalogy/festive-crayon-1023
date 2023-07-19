const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(function () {
        console.log('DB Connection Successfull');
    })
    .catch(function (err) {
        console.log(err.message);
    });

app.listen(process.env.PORT || 5000, function () {
    console.log('Backend Server is running');
});
