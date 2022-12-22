const mongoose = require('mongoose');

const newauthorSchema = new mongoose.Schema( {
    author_name:{
        type:String,
        required:true
    },
    age:Number,
    address:String,
    rating:Number


}, { timestamps: true });

module.exports = mongoose.model('newauthor', newauthorSchema)
