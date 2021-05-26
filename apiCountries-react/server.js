const express = require("express")
const cors = require("cors")
const { countries } = require("./dataCountries.js")

const app = express()

app.use(cors())

const port = 8001

// app.get("/clean/countries/all", (req, res) => {

//     const result = countries.map(elem => {
//         return {
//             name: elem.name,
//             capital: elem.capital,
//             region: elem.region,
//             population: elem.population,
//             flag:  elem.flag
//         }
//     })


//     res.json(result)
// })

app.get("/country/:countryName", (req, res) => {
    // console.log("req.params.countryName", req.params.countryName);

    const countryName = req.params.countryName

    // console.log("countries from dataCountries", countries);

    const dataCountry = countries.find(elem => {
        console.log("countries.find current elem", elem);

        return elem.name.toLowerCase() === countryName.toLowerCase()
        // return elem.name === countryName
    })

    res.json(dataCountry)
})

app.get("/countries/search/:valueToSearch", (req, res) => {
    
    // console.log("param value countries search", req.params.valueToSearch);

    const valueToSearch = req.params.valueToSearch.toLowerCase()

    const countriesFound = countries.filter(elem => {

        return elem.name.toLowerCase().includes(valueToSearch)
    })

    console.log("countriesFound", countriesFound);

    res.json(countriesFound)
})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})