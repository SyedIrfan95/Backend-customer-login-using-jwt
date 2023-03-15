const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema ({
    name : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    token : {
        type : String
    }
})

const Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer