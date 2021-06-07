const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Hoolos",
    (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('im connect');
        }
    })

const HoolosSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    created: Date
})

const Hoolos = mongoose.model("Hoolos", HoolosSchema)



const Renault = new Hoolos({
    brand: "Renault",
    model: "Espace",
    year: 1999,
});
const Peugeot = new Hoolos({
    brand: "Peugeot",
    model: 308,
    year: 2017
});
const Renault2 = new Hoolos({
    brand: "Renault",
    model: "Scenic",
    year: 2004
});

Renault.save()
Renault2.save()
Peugeot.save()

const id = "60be1831e7784822b93cab80";

Hoolos.findById(id, function (err, docs) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Result : ", docs);
    }
});


Hoolos.updateOne({ year: 1999 }, function (
    err,
    result
) {
    if (err) {
        res.send(err);
    } else {
        res.json(result);
    }
});

Hoolos.deleteMany({ brand: "Renault" }, function (err, result) {
    if (err) {
        res.send(err);
    } else {
        res.send(result);
    }
});