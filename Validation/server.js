const express = require("express")
const cors = require("cors")
const { debug } = require("./middlewares/debug")
const {People} = require("./model/user")


const port = 8888

const app = express()

app.use(cors())

app.use(express.json())

app.use(debug)


app.get("/", debug, async (req, res) => {
    try {
        const users = await People.find().exec()

        res.json(users)
    } catch (error) {
        console.error("Error in GET /users", error)

        res.json({
            message: "Error when finding users :("
        }, 500)
    }
})


app.listen(port, () => {
    console.log("Server is listening at port ", port);
})
