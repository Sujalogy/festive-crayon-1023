const express = require('express');
const {updateUser} = require('../Controllers/user.controller.js');
const {verifyAdmin, verifyToken} = require('../Middlewares/auth.middleware.js');
const userRouter = express.Router();

userRouter.patch('/:email', verifyToken, updateUser);
module.exports = {userRouter};
