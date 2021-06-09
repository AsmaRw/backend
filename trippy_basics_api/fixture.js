const mongoose = require('mongoose')
const Hotel = require("./model/Hotel")
const Restaurant = require("./model/Restaurant")

mongoose.connect("mongodb://localhost:27017/HotelDB", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database Hotel")
    }
})
// mongoose.connect("mongodb://localhost:27017/RestoDB", (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log("I'm connected to the database Resto")
//     }
// })

const addHotel = async () => {

    try {
        await Hotel.deleteMany({})

        await Hotel.insertMany([
            {
                name: "badTrip",
                powers: ["14 rue de la chevre"],
                city: "Parixxx",
                country: "Frangaule",
                stars: 2,
                hasSpa: false,
                hasPool: true,
                prieceCategory: 1,
            },
        ])

        console.log("The collection hotel was recreated with the base data");

    } catch (err) {
        console.error(err)
    }
}

addHotel()