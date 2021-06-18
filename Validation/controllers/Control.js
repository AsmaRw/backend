const expressValidator = require("express-validator");
const City = require("../models/user");


const newRoute = async (req, res) => {
    try {
        const error = expressValidator.validationResult(req);
        const user = req.body

        if (!error.isEmpty()) {
            res.status(400).json({ message: "error from the user" });
        } else {

            const cityN = await City.findOne({ name: user.city })
            user.city = cityN

            await User.create(user)
            res.json({ message: 'add a new user' })
        }
    } catch (error) {
        res.status(500).json({ errorMessage: "error from the server" })
    }
}


module.exports = { newRoute }