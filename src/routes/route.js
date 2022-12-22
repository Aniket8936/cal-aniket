const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newauthorcontroller=require("../controllers/newauthorcontroller")
const newpublishercontroller=require("../controllers/newPublishercontroller")
const newbookcontroller=require("../controllers/newbookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

//problem 1. Write a POST api that creates an author from the details in request body
router.post("/newauthor",newauthorcontroller.newauthor)

//problem 2.  Write a POST api that creates a publisher from the details in the request body
router.post("/newpublisher",newpublishercontroller.newpublisher)

//problem 3. Write a POST api that creates a book from the details in the request body.
router.post("/newbook",newbookcontroller.newbook)

router.post("/createbooks",newbookcontroller.createbooks)

//problem 4. Write a GET api that fetches all the books along with their author details 
//(you have to populate for this) as well the publisher details (you have to populate for this) 
router.get("/getfetchbook",newbookcontroller.getfetchbook)

//problem 5.Create a new PUT api 
router.put("/update",newbookcontroller.update)

router.put("/increaseprice",newbookcontroller.increaseprice)

module.exports = router;