const newauthormodel = require("../models/newauthormodel")
const newbookmodel=require("../models/newbookmodel")
const newPublishermodel = require("../models/newPublishermodel")
//problem 3.
// Write a POST api that creates a book from the details in the request body.
const newbook=async function(req,res){
    const data=req.body
    let newbookcreate=await newbookmodel.create(data)
     res.send({msg:newbookcreate})

}

// problem 3(a).
//The authorId is present in the request body. If absent send an error message that this detail is required
const createbooks=async function(req,res){
    const {author,publisher}=req.body
    if(!author){
        return res.send("authorId is required")
    }
    // problem 3(b)
    //If present, make sure the authorId is a valid ObjectId in the author collection.
    // A valid ObjectId in author collection means that a document must exist with this id. If not then send an error message that the author is not present.
    const authorIdvalidobjId=await newauthormodel.findOne({id:author})

    if(!authorIdvalidobjId){
        return res.send("objId is not valid")
    }
     // problem 3(c)
     //The publisherId is present in the request body. If absent send an error message that this detail is required
    if(!publisher){
        return res.send("publisherId is required")
    }
     // problem 3(d)
     //If present, make sure the publisherId is a valid ObjectId in the publisher collection.
     // If not then send an error message that the publisher is not present.
    const publisherIdvalidobjId=await newPublishermodel.findOne({id:publisher})

    if(!publisherIdvalidobjId){
        return res.send("objId is not valid")
    }
    const data =req.body
    const book=await newbookmodel.create(data)
    res.send(book)
}

// problem 4.
//Write a GET api that fetches all the books along with their author details (you have to populate for this) 
//as well the publisher details (you have to populate for this) 
const getfetchbook=async function(req,res){
    const fetchbook=await newbookmodel.find().populate('author').populate('publisher')
    res.send({msg:fetchbook})
}

// problem 5(a)
//Add a new boolean attribute in the book schema called isHardCover with a default false value.
// For the books published by 'Penguin' and 'HarperCollins', update this key to true.
const update=async function(req,res){
    const data=req.body

    const publisher=await newPublishermodel.find({name:{$in:['HarperCollins','Penguin']}})//[{id,id}]
    const publisherId=publisher.map(publisher=>publisher.id)
    const updatedata=await newbookmodel.updateMany({publisher:{$in:publisherId}}, {$set:{isHardCover:true}})

    res.send({msg:updatedata})
}
// problem 5(b)
//b) For the books written by authors having a rating greater than 3.5, update the books price by 10 
//(For eg if old price for such a book is 50, new will be 60)
const increaseprice=async function(req,res){
    const data=req.body
    const updateprice=await newbookmodel.updateMany({rating:{$gt:3.5}}, {$inc:{price:10}})
    res.send({msg:updateprice})
}

module.exports.newbook=newbook
module.exports.getfetchbook=getfetchbook
module.exports.createbooks=createbooks
module.exports.update=update
module.exports.increaseprice=increaseprice