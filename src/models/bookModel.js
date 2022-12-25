const mongoose=require('mongoose')
 
const bookSchema= new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    author: String,
     tags: [ String ], //array of strings
     year: Number,
    prices: {
        indianPrice: Number,
        europeanPrice: Number,
        japanPrice: Number
    },
     totalPages : Number,
     stockAvailable:Boolean
}, {timestamps: true} )
 
module.exports = mongoose.model( 'book', bookSchema )

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
