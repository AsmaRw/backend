const express = require("express")
const mongoose = require("mongoose")
const hotelRoutes = require("./routes/hotelRoutes")
const restaurantRoutes = require("./routes/restaurantRoutes")
const { port, mongoURL } = require('./config.js')


mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})


const app = express()

app.use(cors())

app.use(express.json())

app.use(debug)

app.use("/hotels", hotelRoutes)
app.use("/restaurants", restaurantRoutes)

app.listen(port, () => {
    console.log("The server is waiting for requests")
})