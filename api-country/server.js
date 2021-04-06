var express = require("express");
var app = express();

var port = 8000;



app.listen(port, function () {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})

// Créez une route `/countries` qui renverra un array avec une liste de 5 des pays aux choix.

app.get('/countries', function(req, res) {
    var countries = [
        "France",
        "USA",
        "Russia",
        "China",
        "Mongolia"
    ]
    res.send(countries);
  });



// Testez la réponse de cette route depuis chrome.

// Dans le même dossier, codez un programme en `js` (dans un nouveau fichier `callAPI.js`), qui, à l'aide du module `request`, fera une requête de type GET à notre API pour récupérer la liste de pays et qui en suite l'affiche dans le terminal *dans l'ordre inverse*.