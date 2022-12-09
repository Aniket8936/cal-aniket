const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const logg = require('../logger/logger')
const ddmmyy = require('../util/helper')
const letter = require('../validator/formatter')


router.get('/test-me', function (req, res) {
    /*Assignment 2 Call.............................................................................*/
    ddmmyy.printDate();
    ddmmyy.printMonth();
    ddmmyy.getBatchInfo();

    /*Assignment 3 Call.............................................................................*/
    console.log("lower case",letter.up)
    console.log("upper case",letter.lc)
    console.log("trim",letter.result)


    /*Assignment 1 Call.............................................................................*/
    console.log("application from logger",logg.myApplication)


    /*Assignment 4 Call.............................................................................*/
    const days = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let result = _.first(days, 4)
    console.log(result)

    const arr=[1,3,5,7,11,13,17,19,23,29,31]
    let oddNm = _.tail(arr)
    console.log(oddNm)

    const arr1=[1,2,10,15]
    const arr2=[2,10,15,20]
    const withoutduplicate=_.union(arr1,arr2)
    console.log(withoutduplicate)

    //let pairarr=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    //let obj = _.fromPairs(pairarr);
   // console.log(obj)
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result1 = _.first(days, 4)
    console.log(`Result from underscore function is ${result1}`)


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