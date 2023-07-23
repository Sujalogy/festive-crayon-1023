const express = require('express');
const {
    validateCartData,
    addCart,
    updateCart,
    getCart,
    deleteCart,
} = require('../Controllers/cart.controller.js');

const {verifyAdmin, verifyToken} = require('../Middlewares/auth.middleware.js');

const cartRouter = express.Router();

cartRouter.post('/');
