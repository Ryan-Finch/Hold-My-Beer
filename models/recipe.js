const mongoose = require('mongoose')
const User = require('../models/user')
const recipeSchema = mongoose.Schema({
    name: String,
    type: String,
    style: String,
    grainBill: [{
        type: String,
        qty: Number
    }],
    hopBill: [{
        type: String,
        qty: Number
    }],
    adjuncts: String,
    batchSize: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    fermTime: Number,
    boiTime: Number,
    boilTemp: Number,

}, {
    timestamps = true
})

module.exports = mongoose.model('Recipe', recipeSchema)