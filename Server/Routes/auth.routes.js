const express = require('express');
const {register, login, logout} = require('../Controllers/auth.controllers.js');

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/logout', logout);

module.exports = {authRouter};
