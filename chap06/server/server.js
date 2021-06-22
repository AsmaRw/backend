const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { debug } = require("./middleware/debug")

mongoose.connect("mongodb://localhost:27017/auth",{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const port = 8111

const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(debug)

///


//listen
app.listen(port, () => {
    console.log("Server is listening at port ", port);
})