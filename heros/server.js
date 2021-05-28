const express = require("express")
const cors = require("cors")
const { heros } = require("./data.js")
const app = express()

app.use(express.json())
app.use(cors())

const port = 8899


app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.get("/heros", (req, res) => {

    res.json(heros)
})



app.get("/heros/:herosName", (req, res) => {
    const herosName = req.params.herosName
    console.log('herosname', herosName);
    
    const dataHeros = heros.find( elem => {
        console.log('elem', elem);
        
        return elem.name.toLocaleLowerCase() === herosName.toLocaleLowerCase()
    })
    
    console.log('data', dataHeros);
    res.json(dataHeros)
})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})