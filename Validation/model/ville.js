const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/valid");

const citySchema = mongoose.Schema({
    name: String,
})

const Ville = mongoose.model('Ville', citySchema)

module.exports = Ville

const Add = () => {
    Ville.insertMany([
        { name: "Paris" },
        { name: "Los Angeles" },
        { name: "Tokyo" }])
}

Add()