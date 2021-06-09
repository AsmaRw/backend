const mongoose = require("mongoose")

const hotelSchema = new mongoose.Schema({
    name: String,
    adress: [String],
    city: String,
    country: String,
    stars: {type: Number, min: 1, max: 5},
    hasSpa: Boolean,
    hasPool: Boolean,
    prieceCategory: {type: Number, min: 1, max: 3}
})

const Hotels = mongoose.model("Hotel", hotelSchema)

module.exports = Hotels