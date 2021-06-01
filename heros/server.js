const express = require("express")
const cors = require("cors")
const { heros } = require("./data.js")
const app = express()


const port = 8899

const debug = (req, res, next) => {
    console.log("I received a request!");

    next()
}

app.use(cors())

app.use(express.json())

app.use(debug)

app.get("/heros", (req, res) => {
    res.json(heros)
})


app.get("/heros/:name", (req, res) => {
    const herosName = req.params.name.toLowerCase()
    for (var i = 0; i < herosName.length; i++) {
        if (heros[i].name.toLowerCase() === herosName) {
            res.json(heros[i])
        }
    }
    res.json({ message: "Hero not found" })

})


app.get("/heros/:name/powers", (req, res) => {
    const herosName = req.params.name.toLowerCase()

    const dataPower = heros.find(elem => {

        return herosName === elem.name.toLowerCase()
    })

    res.json(
        dataPower.power
    )


})


const transformName = (req, res, next) => {

    if (req.body.name === undefined) {
        res.json({
            erroMessage: "To add a hero send at least he's name"
        })
    } else {
        req.body.name = req.body.name.toLowerCase()

        next()
    }

}



app.post("/heros", transformName, (req, res) => {

    const superHero = req.body

    heros.push(superHero)

    res.json({
        message: "heros add !",
        hero
    })
})

app.post("/heros/:name/powers", (req, res) => {
    const nameHero = req.params.name.toLowerCase()

    const selectedHero = heros.find(elem => {
        return nameHero === elem.name.toLowerCase()
    })

    if (selectedHero) {
        const heroPower = req.body.power
        selectedHero.powers.push(heroPower)
        res.json({
            message: `Power added! The powers of ${nameHero} are ${selectedHero.powers}`
        })
    } else {
        res.json({
            errorMessage: "Hero not found"
        })
    }
})


app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})