const newauthormodel=require("../models/newauthormodel")


//problem 1.
//Write a POST api that creates an author from the details in request body

const newauthor=async function(req,res){
    const data=req.body
    let newauthorcreate=await newauthormodel.create(data)
     res.send({msg:newauthorcreate})

}


module.exports.newauthor=newauthor