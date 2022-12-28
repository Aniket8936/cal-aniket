const headervalidation=function (req,res,next){
    let appHeader = req.headers["isFreeAppUser"]
    if(!appHeader) appHeader = req.headers["isfreeappuser"]

    if(!appHeader) return res.send({status: false, message:"The mandatory header is not present"})

    //let data= req.body

    if(appHeader == 'true') {
        data.isFreeAppUser = true
    } else {
        data.isFreeAppUser = false
    }

    next()
}

module.exports.headervalidation=headervalidation