const express = require("express");
const cors = require("cors");
const countries = require('./dataCountries')

const app = express();

app.use(cors())

const port = 8000;

app.get('/countries/:name', (req, res) => {
    let pays = req.params.pays

    let resultCountries = {}
        for (let i = 0; i < countries.length; i++) {
    
            const curCountries = countries[i];
    
            if (curCountries === pays) {
                
                resultCountries= countries;
            }
            
        }
    
})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port 8000");
})