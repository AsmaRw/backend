const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/valid");

const citySchema = mongoose.Schema({
    name: String,
})
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    city: [{ type: mongoose.Schema.Types.ObjectId, ref: 'City' }]
})

const City = mongoose.model('City', citySchema)

const People = mongoose.model("User", userSchema)

module.exports ={People, City}
