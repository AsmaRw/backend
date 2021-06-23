const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');

const signupSchema = new mongoose.Schema({
    username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    password: String,
    role: Number
}, {timestamps: true})

signupSchema.plugin(uniqueValidator, {message: 'is already taken.'});

const signupMode = mongoose.model("login", signupSchema)

module.exports = signupMode