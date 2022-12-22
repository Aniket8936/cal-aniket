const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "newauthor",
        required:true
    }, 
    price: Number,
    rating: Number,
    publisher:{
        type:ObjectId,
        ref:"newpublisher",
        required:true
    },
    isHardCover:{
        type:Boolean,
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('newbook', newBookSchema)
