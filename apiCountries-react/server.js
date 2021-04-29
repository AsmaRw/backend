const express = require("express");
const cors = require("cors");
var dataCountries = require('./dataCountries')

const app = express();

app.use(cors())

const port = 8000;

app.get('/countries', (req, res) => {
    res.json({dataCountries})
})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port 8000");
})