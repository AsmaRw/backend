const expressValidator = require("express-validator");


const newRoute = async (req, res) => {
    try {
        const error = expressValidator.validationResult(req);
        const yuser = req.body
    } catch (error) {
        res.status(500).json({ errorMessage: "error !!!" })
    }
}

module.exports = { newRoute }