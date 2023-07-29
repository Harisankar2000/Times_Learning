const notFound = (req,res,next)=>{
    const err = new Error(`Not found :${req.originalUrl}`);
    res.status(404)
    next(err)
}

const errorHandler = (err,req,res,next)=>{
    const statuscode = res.statusCode == 200 ? 400:res.statusCode
    res.status(statuscode)
    res.json({
        message:err?.message,
        stack:err?.stack
    })
}
module.exports = {notFound,errorHandler};