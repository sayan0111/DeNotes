
const express = require('express')
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')
const postRoutes = require("./routes/posts")
const  cors=require("cors")
const bodyParser = require('body-parser');

const app=express()
//connect DB
mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology:true,useNewUrlParser: true},
    ()=>console.log('Connected to DB')
)

//routes Middleware


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/api/posts",postRoutes)

app.use(cors())



app.listen(3001,()=>console.log("Server is up and running"))