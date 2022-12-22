const mongoose = require('mongoose');

const newpublisherSchema = new mongoose.Schema( {
    name:{
        type:String,
        required:true
    },
    headQuarter:String


}, { timestamps: true });

module.exports = mongoose.model('newpublisher', newpublisherSchema)
