// require mongoose
const mongoose = require('mongoose')

// create schema
const schema = mongoose.Schema

const carSchema = new schema({

    userCar : {
        type : String,
        required : true
    },
    userCarImage : {
        type : String
    },

    make : {
        type : String,
        required : true
    },
    model : {
        type : String
    },
    year : {
        type : Number
    },
    articleImage: {
        type : String
    },
    likedByUserId : {
        type : Array
    },
    likedByUserName : {
        type : Array
    },
    goldCar :{
        type: Boolean,
        default:false

    }
})

module.exports = Car = mongoose.model('car',carSchema)