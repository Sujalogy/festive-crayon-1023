const router = require('express');
const {updateUser} = require('../Controllers/user.controller.js');
const userRouter = express.Router();

userRouter.patch('/:id', updateUser);
