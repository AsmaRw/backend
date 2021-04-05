var express = require("express");
var getNamePokemon = require("./dataPokemon.js")

var app = express();

var port = 8080;

app.get("/pokemon/:id", function (req, res) {
    
    var id = req.params.id;


    res.json({ name: getNamePokemon(id) })
})

app.listen(port, function () {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})