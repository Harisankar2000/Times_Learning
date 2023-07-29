const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect')
const authRoute = require('./routers/authRoute')
const morgan = require('morgan')
//configuration
const dotenv = require('dotenv');
dotenv.config();
//middleware
app.use(express.json());
app.use(morgan('dev'));

dbConnect();
//routers
app.use('/api/v1/auth',authRoute)
app.get("/",(req,res)=>{
    res.send({
        message:"Welcome To E-commerce App...."
    })

})

app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT}`)
})
