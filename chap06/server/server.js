const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { debug } = require("./middleware/debug")
const { utilisateurs } = require("./Model/utilisateurs")


/*{app config}*/
const app = express()
const port = process.env.Port || 8187


//middleware
app.use(cors())
app.use(express.json())
app.use(debug)

//db config
mongoose.connect("mongodb://localhost:27017/auth",{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// routes





//listen
app.listen(port, () => {
    console.log("Server is listening at port ", port);
})