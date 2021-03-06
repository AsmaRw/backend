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

// ROUTES BOOKS

var listBooks = [
    "Beowulf",
    "Hamlet, Othello, Romeo and Juliet, MacBeth",
    "Oliver Twist, A Christmas Carol",
    "The Picture of Dorian Gray, The Importance of Being Earnest"
]

app.get('/authors/1/books/', (req, res) => {
    res.send(listBooks[0])
});

app.get('/authors/2/books/', (req, res) => {
    res.send(listBooks[1])
});

app.get('/authors/3/books/', (req, res) => {
    res.send(listBooks[2])
});

app.get('/authors/4/books/', (req, res) => {
    res.send(listBooks[3])
});