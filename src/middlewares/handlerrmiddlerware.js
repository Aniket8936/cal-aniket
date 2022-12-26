const headervalidation=function (req,res,next){
    const isFreeAppUser=req.headers['isfreeappuser']

    if(!isFreeAppUser){
        return res.send("isfreeappuser is mandatory")
    }else(
        next()
    )
}

module.exports.headervalidation=headervalidation