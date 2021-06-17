const expressValidator = require("express-validator");
const City = require("../models/user");


const newRoute = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);
        const people = req.body


        /////

        ////

    } catch (error) {
        res.status(500).json({ errorMessage: "err 500" })
    }
}

module.exports = { newRoute }