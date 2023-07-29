const app = require('../backend/app');
const dotenv = require('dotenv')

//config
dotenv.config({
    path: "backend/config/.env"
})


//create server
app.listen(process.env.PORT,()=>{
    console.log(`server started on the ${process.env.PORT} `)
})