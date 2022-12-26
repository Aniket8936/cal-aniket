const mongoose=require('mongoose')

const productdocument=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
	category:{
        type:String,
        required:String
    },
	price:{
        type:Number,
        required:true
    }

});

module.exports=mongoose.model('product',productdocument)