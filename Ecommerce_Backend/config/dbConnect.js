const mongoose = require("mongoose")

const dbConnect= async ()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        });
        console.log('Database Connected....');
      } catch (error) {
        console.error(`Error in mongoDB connection${error}`);
      }
    
}
module.exports = dbConnect;