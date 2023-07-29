const express = require('express');
const producrRouter = require('./routes/productRoute')
const app = express();

app.use(express.json())


app.use("/api/v1",producrRouter)
module.exports = app;