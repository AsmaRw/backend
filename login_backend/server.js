//import
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const { debug } = require("./middlewares/debug")


//app config
const port = 9003
const app = express()


//db config
mongoose.connect("mongodb://localhost:27017/login", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


//middlwares
app.use(cors())
app.use(express.json())
app.use(debug)


//listen 
app.listen(port, () => {
    console.log("Server is listening at port ", port);
})