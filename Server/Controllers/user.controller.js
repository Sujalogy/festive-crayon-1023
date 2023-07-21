const bcrypt = require('bcrypt');
const {UserModel} = require('../Models/user.model.js');

const updateUser = async function (req, res) {
    try {
        if (req.body.password) {
            bcrypt.hash(req.body.password, 5, function (err, hash) {
                if (err) {
                    return res.status(400).json({
                        status: 'fail',
                        error: err.message,
                    });
                } else {
                    req.body.password = hash;
                }
            });
        }

        await UserModel.findByIdAndUpdate(req.params.id, req.body);

        res.status(400).json({
            status: 'success',
            message: 'User Updated Successfully',
        });
    } catch (error) {
        return req.status(400).json({
            status: 'fail',
            error: error.message,
        });
    }
};

module.exports = {updateUser};
