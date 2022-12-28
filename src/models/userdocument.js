const mongoose=require('mongoose');
const { stringify } = require('querystring');

const userdocument=new mongoose.Schema({
    name:String,
	balance:{
        type:Number,
        default:100
    },
	address:String,
	age:Number,
 	gender:{
        type:String,
        enum:["male","female","LGBTQ"]
    },
	isFreeAppUser:{
        type:Boolean,
        default:false
    } 
},    {timestamps:true});

module.exports=mongoose.model('user',userdocument)