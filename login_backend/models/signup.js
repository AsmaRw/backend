const mongoose = require("mongoose")
var uniqueValidator = require('mongoose-unique-validator');
const signupSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    password: String,
    role: Number
}, {timestamps: true})

signupSchema.plugin(uniqueValidator, {message: 'is already taken.'});

const signupMode = mongoose.model("login", signupSchema)

module.exports = signupMode