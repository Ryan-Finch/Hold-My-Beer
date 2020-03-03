const mongoose = require('mongoose')
const User = require('../models/user')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: String,
    rating:{
        type: Number,
        min: 1,
        max: 5
    }
},
{
    timestamps: true,
})

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
        required: true
    }],
    grainQty:{
        type: Number,
        required: true
    },
    hopBill: [{
        type: String,
        required: true
    }],
    hopQty:{
        type: Number,
        required: true
    },
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
    boilTime: {
        type: Number,
        required: true
    },
    boilTemp: {
        type: Number,
        required: true
    },
    comments: {
        type: [commentSchema]
    },
   
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)