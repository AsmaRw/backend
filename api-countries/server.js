var express = require("express");
var app = express();
var cors = require('cors')
app.use(cors())

var port = 8000;



app.listen(port, function () {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})

app.get('/countries', function(req, res) {
    var countries = [
        "France",
        "USA",
        "Russia",
        "China",
        "Mongolia"
    ]
    res.json(countries);
  });



