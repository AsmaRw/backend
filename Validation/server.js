
const express = require("express");
const expressHandlebars = require("express-handlebars");
const expressValidator = require("express-validator");
const { user } = require("./model/user")
const expressValidator = require("express-validator");
const passwordValidator = require('password-validator');

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/user", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})


router.get("/", debug, async (req, res) => {
    try {
        const users = await user.find().exec()

        res.json(users)
    } catch (error) {
        console.error("Error in GET /users", error)

        res.json({
            message: "Error when finding users :("
        }, 500)
    }
})


app.listen(8000, () => {
    console.log('Server started');
});
