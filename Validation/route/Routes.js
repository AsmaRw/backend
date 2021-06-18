const express = require("express")
const router = express.Router()
const expressValidator = require("express-validator");
const newRoute = require('../controllers/Control')

router.post("/add",
    expressValidator.body("username").isLength({ min: 4 }),
    expressValidator.body("email").isEmail(),
    expressValidator.body("age").isInt().isLength(({ min: 2, max: 2 })),
    expressValidator.body("city").custom(value => {
        if (value === "Paris" ||
            value === "Los Angeles" ||
            value === "Tokyo") {
            return true
        }
        return false
    }),
    newRoute
)



module.exports =  router