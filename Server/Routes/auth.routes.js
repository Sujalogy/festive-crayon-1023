const express = require('express');
const {register, login, logout} = require('../Controllers/auth.controllers.js');

const authRouter = express.Router();

authRouter.post('/register', register(req, res));
authRouter.post('/login', login(req, res));
authRouter.get('/logout', logout(req, res));

module.exports = {authRouter};
