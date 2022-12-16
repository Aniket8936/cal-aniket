const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const BookModel= require("../models/bookmodel.js")
const UserController= require("../controllers/userController")
const bookController=require("../controllers/bookcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.post("/createUserbook",bookController.createUserbook )

router.get("/getUsersData", UserController.getUsersData)

router.get("/getUserBook",bookController.getUsersBook)

module.exports = router;