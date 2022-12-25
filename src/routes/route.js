const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const book56controller=require("../controllers/book56Controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createuserbook", BookController.createuserbook)

router.get("/getBooksData", BookController.getBooksData)

router.get("/getbooksInYear", BookController.getbooksInYear)
router.get("/getXINRBooks", BookController.getXINRBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)
router.get("/getParticularBooks", BookController.getParticularBooks)

module.exports = router;