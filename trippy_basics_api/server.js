const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const Hotel = require("./model/Hotel")
const Restaurant = require("./model/Restaurant")

//app config
const app = express()
const port = 8999

//midleware
const debug = (req, res, next) => {
    console.log("I received a request!");
    next()
}
app.use(express.json())
app.use(cors())
app.use(debug)


//mongoose
mongoose.connect("mongodb://localhost:27017/trippy_basics", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected ")
    }
})

//api route Hotel

app.get("/hotels", async (req, res) => {
    try {
        const hotels = await Hotel.find()
        res.json(hotels)
    } catch (err) {
        console.error(err)
        res.json({ errorMessage: "We have a problem" }, 500)
    }

})


// api route Restaurant

app.get("/restaurants", async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        res.json(restaurants)
    } catch (err) {
        console.error(err)
        res.json({ errorMessage: "We have a problem" }, 500)
    }
})

// listen
app.listen(port, () => {
    console.log("Server is listening at port ", port);
})