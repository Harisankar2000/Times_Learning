const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')
const bodyParser = require('body-parser')
const dbConnect = require('./config/dbConnect')
const authRoutes = require('./routes/authRoutes');
const { notFound ,errorHandler} = require('./middlewares/errorHandler');
notFound
const PORT = process.env.PORT || ""
const app = express();
dbConnect()
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use('/api/v1/user',authRoutes)
app.use(errorHandler)


app.listen(PORT,()=>{
    console.log(`server running at ${PORT} `)
})