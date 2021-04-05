//Serveur

const express = require('express');
const app = express();

const port = 8000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.get('/', (req, res) => {
    res.send('Authors API');
});

// ROUTES AUTHORS

var listAuthors = [
    "Lawrence Nowell, UK",
    "William Shakespeare, UK",
    "Charles Dickens, US",
    "Oscar Wilde, UK",
]

app.get('/authors/1/', (req, res) => {
    res.send(listAuthors[0])
});

app.get('/authors/2/', (req, res) => {
    res.send(listAuthors[1])
});

app.get('/authors/3/', (req, res) => {
    res.send(listAuthors[2])
});

app.get('/authors/4/', (req, res) => {
    res.send(listAuthors[3])
}); 


 