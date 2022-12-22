const newpublishermodel=require("../models/newPublishermodel")
// problem 2
// Write a POST api that creates a publisher from the details in the request body
const newpublisher=async function(req,res){
    const data=req.body
    let newpublishercreate=await newpublishermodel.create(data)
     res.send({msg:newpublishercreate})

}


module.exports.newpublisher=newpublisher