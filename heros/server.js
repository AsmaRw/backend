const express = require("express")
const cors = require("cors")
const { heros } = require("./data.js")
const app = express()

app.use(express.json())
app.use(cors())

const port = 9005


app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.get("/heros", (req, res) => {

    res.json(heros)
})



app.get("/heros/:name", (req, res) => {

    const herosName = req.params.herosName

    const dataHeros = heros.find(elem => {
        console.log("heros.find current elem", elem);

        return elem.name === herosName
    })

    res.json(dataHeros)
})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})