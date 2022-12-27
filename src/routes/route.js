const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const headermidd=require("../middleware/headermidd")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",headermidd.authentication,userController.getUserData)

router.put("/users/:userId",headermidd.authentication,userController.updateUser)

router.delete("/users/:userId",headermidd.authentication,userController.deleteuser)

module.exports = router;