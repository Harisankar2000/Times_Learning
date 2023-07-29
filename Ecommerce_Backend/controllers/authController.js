const { bcryptPassword , comparePassword} = require("../helpers/authHelper");
const userModel = require("../models/userModel");
const JWT = require('jsonwebtoken')

module.exports.registerController = async (req, res) => {
  try {
    const { first_name, last_name, email, password, mobile,adress } = req.body;
    if (!first_name && !last_name) {
      res.send({ error: "Name is required" });
    }
    if (!email) {
      res.send({ error: "Email is required" });
    }
    if (!password) {
      res.send({ error: "Password is required" });
    }
    if (!mobile) {
      res.send({ error: "Mobile no. is required" });
    }
    //check user
    const existingUser = await userModel.findOne({ email });
    //Existing user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "user is already registred, please login",
      });
    }
    //register user
    const hashedPassword = await bcryptPassword(password);
    const user = await new userModel({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      mobile,
      adress,
    }).save();
    return res.status(201).send({
      success: true,
      message: "User registration sccessfully!",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Registration Failed!",
      success: false,
    });
  }
};

module.exports.loginController = async(req,res) => {
  try {
    const {email,password} = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
    
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Failed to Login!",
      success: false,
    });
  }

}

module.exports.testController = async(req,res) =>{
  res.status(200).send({
    message:"this route is protected"
  })
};