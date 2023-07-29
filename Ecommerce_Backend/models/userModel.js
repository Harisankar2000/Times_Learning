const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//mongodb generate user model
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      trim:true
    },
    last_name: {
      type: String,
      required: true,
      trim:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    adress: {
        type: String,
      },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
//Export the model
module.exports = mongoose.model("User", userSchema);
