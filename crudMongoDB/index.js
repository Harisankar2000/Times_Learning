const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors= require('cors')
const productRouter = require('./router/product')
dotenv.config()
const app = express();
app.use(express.json())
app.use(cors())
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database Connected');
  } catch (error) {
    console.error(error);
  }
}
connectDB();

app.use('/api/products',productRouter)

app.listen(5000, () => {
  console.log('Sever Started at 5000');
});
