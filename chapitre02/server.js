const express = require("express")
const cors = require("cors")
const { students } = require("./dataStudent.js")

const app = express()

app.use(express.json())
app.use(cors())

const port = 9034

app.get("/students", (req, res) => {

    res.json(students)
})


app.post("/students", (req,res)=> {
    const newStudent = req.body

    students.push(newStudent)

    res.json({
        message: 'student added !'
    })
})


app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})