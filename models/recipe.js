const mongoose = require('mongoose')
// const User = require('../models/user')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    style: String,
    grainBill: [{
        type: String,
        qty: Number,
        required: true
    }],
    hopBill: [{
        type: String,
        qty: Number,
        required: true
    }],
    adjuncts: String,
    batchSize: {
        type: Number,
        default: 6,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    fermTime: {
        type: Number,
        require: true
    },
    boiTime: {
        type: Number,
        required: true
    },
    boilTemp: {
        type: Number,
        required: true
    },

}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)