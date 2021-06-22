const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/auth");

const utilisateursSchema = mongoose.Schema({
    ID: String,
    email: String,
    password: String
})

const Users = mongoose.model("Users", utilisateursSchema)

module.exports = Users