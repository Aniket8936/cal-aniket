const userdocumentcontroller=require("../models/userdocument")

const createuser=async function(req,res){
    const data=req.body
    const product=await userdocumentcontroller.create(data)

    res.send({msg:product})

}

module.exports.createuser=createuser