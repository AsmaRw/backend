const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/valid");

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    city: [{ type: mongoose.Schema.Types.ObjectId, ref: 'City' }]
})

const People = mongoose.model("People", userSchema)

module.exports = People

