const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId

const orderdocumen=new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:"user"
    },
	productId:{
        type:ObjectId,
        ref:"product"
    },
	amount:Number,
	isFreeAppUser:{
        type:Boolean,
        required:true
    },
	date: String

},   {timestamps:true});

module.exports=mongoose.model('order',orderdocumen)