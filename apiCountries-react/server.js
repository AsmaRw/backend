const express = require("express");
const cors = require("cors");
const countries = require('./dataCountries')

const app = express();

app.use(cors())

const port = 8000;

app.get('/countries/:name', (req, res) => {

    let name = req.params.name
    console.log(name);
    let resultCountries = []
        for (let i = 0; i < countries.length; i++) {
            const curCountries = countries[i];
            if (curCountries.name.toLocaleLowerCase() === name) {
                resultCountries.push(curCountries)
            }
            
        }
        res.json({
            resultCountries
        })
})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port 8000");
})