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

////


// ROUTES AUTHORS


app.get("/authors/:id", function (req, res) {
    var id = req.params.id;
    
    var listAuthors = [
        "Lawrence Nowell, UK",
        "William Shakespeare, UK",
        "Charles Dickens, US",
        "Oscar Wilde, UK",
    ]
    
    var infoAuthor = listAuthors[id - 1]
    
    res.send(infoAuthor)
})

// ROUTE BOOKS


app.get("/authors/:id/books", function (req, res) {
    var indexArray = req.params.id - 1;
    
    var listBooks = [
        "Beowulf",
        "Hamlet, Othello, Romeo and Juliet, MacBeth",
        "Oliver Twist, A Christmas Carol",
        "The Picture of Dorian Gray, The Importance of Being Earnest"
    ]
    
    var books = listBooks[indexArray];
    
    res.send(books)
})


// json 

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]


app.get("/json/authors/:id", function (req, res) {
    var indexArray = req.params.id - 1;

    var author = authors[indexArray]

    var resultObj = {
        name: author.name,
        nationality: author.nationality
    }

    res.json(resultObj)
})

app.get("/json/authors/:id/books", function (req, res) {
    var id = req.params.id;

    var author = authors[id - 1];

    res.json({
        books: author.books
    })
})
