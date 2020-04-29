var express = require("express")
var router = express.Router()

const {
    signout,
    signup
} = require("../controllers/auth")
const {
    check,
    validationResult
} = require('express-validator');

router.post("/signup", [
    // ...some other validations...
    check('firstName').isLength({ min : 5}).withMessage("Name Must be greater than 3"),
    check('email').isEmail().withMessage('Invalid Email'),
    check('password')
    .isLength({
        min: 5
    }).withMessage('must be at least 5 chars long')
    .matches(/\d/).withMessage('Password must contain a number')
], signup);
router.get("/signout", signout);

module.exports = router;