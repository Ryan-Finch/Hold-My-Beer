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
        min: .01,
        required: true
    },
    hopBill: [{
        type: String,
        required: true
    }],
    hopQty:{
        type: Number,
        min: .01,
        required: true
    },
    adjuncts: String,
    batchSize: {
        type: Number,
        min: 1,
        default: 6,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    fermTime: {
        type: Number,
        min: 1,
        require: true
    },
    boilTime: {
        type: Number,
        min: 1,
        required: true
    },
    boilTemp: {
        type: Number,
        min: 1,
        required: true
    },
    comments: {
        type: [commentSchema]
    },
   
}, {
    timestamps: true
})



module.exports = mongoose.model('Recipe', recipeSchema)