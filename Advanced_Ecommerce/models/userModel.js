const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt')
//mongodb generate user model
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

userSchema.pre("save",() =>{
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
       this.password= bcrypt.hash(this.password, salt, function(err, hash) {
            // Store hash in your password DB.
        });
    });
    // if (!this.isModified("password")) {
    //   next();
    // }
    // const salt = await bcrypt.genSaltSync(10);
    // this.password = await bcrypt.hash(this.password, salt);
    //next();
  });
//Export the model
module.exports = mongoose.model('User', userSchema);
