require('dotenv').config();
const jwt = require('jsonwebtoken');
const {BlackListModel} = require('../Models/blacklist.model.js');

const verifyToken = async function (req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        const isBlack = await BlackListModel.findOne({token: token});
        if (isBlack) throw new Error('Please Login !');
        jwt.verify(token, process.env.JET_SEC, async function (err, decoded) {
            if (err) {
                return res.status(400).json({
                    status: 'fail',
                    error: err.message,
                });
            }

            if (!decoded) {
                return res.status(400).json({
                    status: 'fail',
                    error: 'Invalid Token',
                });
            }

            if (decoded) {
                req.body.decoded = decoded;
                next();
            }
        });
    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            error: error.message,
        });
    }
};

const verifyAdmin = async function (req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        const isBlack = await BlackListModel.findOne({token: token});
        if (isBlack) throw new Error('Please Login !');
        jwt.verify(token, process.env.JET_SEC, async function (err, decoded) {
            if (err) {
                return res.status(400).json({
                    status: 'fail',
                    error: err.message,
                });
            }

            if (!decoded) {
                return res.status(400).json({
                    status: 'fail',
                    error: 'Invalid Token',
                });
            }

            if (decoded) {
                req.body.decoded = decoded;
                if (decoded.isAdmin) next();
                else {
                    return res.status(400).json({
                        status: 'fail',
                        error: 'Not Allowed !',
                    });
                }
            }
        });
    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            error: error.message,
        });
    }
};

module.exports = {verifyAdmin, verifyToken};
