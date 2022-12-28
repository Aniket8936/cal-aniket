const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const productcontroller=require("../controllers/productcontroller")
const userdocumentcontroller=require("../controllers/userdcumentcontroller")
const orderdocumentcontroller=require("../controllers/orderdocumentcontroller")
const handlerrmiddleware=require("../middlewares/handlerrmiddlerware")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", commonMW.abc, BookController.createBook  )
router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)
router.post("/createproduct",productcontroller.createproduct)
router.post("/createUser",handlerrmiddleware.headervalidation,userdocumentcontroller.createUser)
router.post("/createOrder",handlerrmiddleware.headervalidation,orderdocumentcontroller.createOrder)



module.exports = router;