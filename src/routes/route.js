const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const logg = require('../logger/logger')
const tarik = require('../util/helper')
//const getmonth = require('../util/helper')
const letter = require('../validator/formatter')


router.get('/test-me', function (req, res) {
    //console.log("current month", getmonth.month())
    console.log("lower case",letter.up)
    console.log("upper case",letter.lc)
    console.log("current date", tarik.Date)
    console.log("application from logger",logg.myApplication)
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)


    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})

router.get('/movies', function(req, res){
    const arr=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    
})


module.exports = router;