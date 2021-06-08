const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json())
app.use(cors())


const port = 8899

mongoose.connect("mongodb://localhost:27017/heros", (err) => {
    if (err) {
        console.error('Error !!!', err);
    } else {
        console.log('Connected !');
    }
})
const superHeroSchema = mongoose.Schema({
    name: String,
    power: Array,
    color: String,
    isAlive: Boolean,
    age: Number,
    imageUrl: String,
    created: { type: Date, default: Date.now }
})

const Hero = mongoose.model('Hero', superHeroSchema)

const debug = (req, res, next) => {
    console.log("Server request")
    next()
}

app.use(debug)

const transformName = (req, res, next) => {
    req.body.name = req.body.name.toLowerCase()
    next()
}

app.get("/hero", async (req, res) => {
    try {
        const superHeros = await Hero.find()
        res.json(superHeros)
    } catch (error) {
        console.error(error);
        res.json({ message: "Error" })
    }
})



app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})