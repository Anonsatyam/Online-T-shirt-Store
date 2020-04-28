const User = require("../models/user")
const {
    check,
    validationResult
} = require('express-validator');

exports.signup = (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({
            error: errors.array()[0].msg
        });
    }

    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: "Note able to save user in DB"
            });
        }
        res.json({
            firstName: user.firstName,
            email: user.email,
            password: user.encry_password,
            id: user._id
        });
    });
};

exports.signout = (req, res) => {
    res.json({
        "message": "User Seccessfully Signout"
    });
};