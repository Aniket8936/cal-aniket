const productmodel=require("../models/productdocument")

const createproduct=async function(req,res){
    const data=req.body
    const product=await productmodel.create(data)

    res.send({msg:product})

}

module.exports.createproduct=createproduct