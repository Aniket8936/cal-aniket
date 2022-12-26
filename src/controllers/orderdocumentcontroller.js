const { isValidObjectId } = require("mongoose")
const orderdocumen=require("../models/orderdocument")
const productdocument = require("../models/productdocument")
const userdocument = require("../models/userdocument")

const createorder=async function(req,res){
  const {userId,productId}=req.body

  //go for a headermiddleware and check isfree is available
  const isFreeAppUser=req.headers.isFreeAppUser  //string
  isFreeAppUser=isFreeAppUser.toLowerCase()===true?true:false //boolean 

  if(!productId||!userId){
    return res.send("productId and userId is mandatory")
  }

   if(!isValidObjectId(productId)){
    return res.send("productId ia invalid")
   }

   if(!isValidObjectId(userId)){
    return res.send("userId is invalid")
   }

   const userdetail=await userdocument.findById(userId)

   if(!userdetail){
    return res.send("user is not found")
   }

   const productdetail=await productdocument.findById(productId)

   if(!productdetail){
    return res.send("product is not founf")
   }
   
   





}