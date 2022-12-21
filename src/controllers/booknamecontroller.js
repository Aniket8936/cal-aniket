
const bookdetail=require("../models/bookname.js")
const authormodel=require("../models/author")

const book=async function(req,res){
    let data=req.body
    let savedData=await bookdetail.create(data)
    res.send({msg:savedData})
}

// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will 
//find the author_id //for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
    const getlistbooks=async function(req,res){
       let authors= await authormodel.find({author_name:"Chetan Bhagat"}).select({author_id:1})
      let booklist=await bookdetail.find({author_id:authors[0].author_id})
      res.send({msg:booklist})
   }


//find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.
//  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

    const getfindauthor=async function(req,res){
     const bookdetails=await bookdetail.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
     const author=await authormodel.findOne({author_id:bookdetails.author_id})
     res.send({authorname:author.author_name,price:bookdetails.price}) 
    }
 

    //Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 

    const getfindbook=async function(req,res){
       const book=await bookdetail.find({price:{$gte:50,$lte:100}}).select({author_id:1})
       const arr=book.map((x)=>x.author_id)
      //const authorId=arr
      const authorname=await authormodel.find({author_id:{$in:arr}})
      res.send({msg:authorname})
    }


  module.exports.getfindbook=getfindbook
  module.exports.book=book
  module.exports.getlistbooks=getlistbooks
  module.exports.getfindauthor=getfindauthor