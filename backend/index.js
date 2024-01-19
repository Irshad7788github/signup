const express = require("express")
const mongoose = require("mongoose")
const route = require('./route/route')

const app = express();
const port = process.env.PORT || 5000;

// use the middleware / body parser 
app.use(express.json())

// connect to mongoose 
const URL = "mongodb://127.0.0.1:27017/form"
mongoose.connect(URL)
.then(()=> console.log("db connection successful"))
.catch((error)=> console.log(error.message))

// use the router 
app.use('/api/route', route)

app.get('/', (req, res)=>{
    res.send("Hello World")
})
app.listen(port, (req,res)=>{
    console.log(`server is running on port ${port}`)
})