const userSchema = require('../models/userModel');

const createUser = async(req,res)=>{
    const email = req.body.email
    const findUser = await userSchema.findOne({email:email})
    if (!findUser) {
        const newUser = await userSchema.create(req.body)
        res.json(newUser)
        
    } else {
        res.json({
            message:"user already exist!"
        })
    }
}
module.exports = createUser