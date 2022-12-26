const mongoose=require('mongoose')

const userdocument=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
	balance:{
        type:Number,
        default:100
    },
	address:{
        type:String,
        required:true
    },
	age:{
        type:Number,
        required:true
    },
 	gender:{
        type:String,
        enum:["male","female","LGBTQ"],
        required:true
    },
	isFreeAppUser:{
        type:Boolean,
        default:false
     } 
});

module.exports=mongoose.model('user',userdocument)