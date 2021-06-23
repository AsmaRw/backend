//import
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const config = require("./config.js")
const { debug } = require("./middlewares/debug")


//app config
const port = config.port
const app = express()


//db config
mongoose.connect(config.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("There was a problem when connection to the database")
    } else {
        console.log("I'm connected to the database")
    }
})


//middlwares
app.use(cors())
app.use(express.json())
app.use(debug)


//listen 
app.listen(port, () => {
    console.log("The server is waiting for requests")
})


