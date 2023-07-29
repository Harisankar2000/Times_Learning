const JWT = require('jsonwebtoken')
const userModel = require("../models/userModel");

module.exports.requireSignIn = async(req,res,next) =>{
    try {
        const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized access. Token is missing.',
      });
    }
        const decode = JWT.verify(token,process.env.JWT_SECRET)
        req.user = decode;
        next();
    } catch (error) {
        console.log(error)
    }
}
module.exports.isAdmin = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user._id);
      if (user.role !== 1) {
        return res.status(401).send({
          success: false,
          message: "UnAuthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error,
        message: "Error in admin middelware",
      });
    }
  };