const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    price:{
        type:Number
    },
    subject:{
        type:String
    },
    department:{
        type:String
    },
    semester:{
        type:Number
    },
    firstpage:{
        type:String,
        required:true
    },
    secondpage:{
        type:String,
        required:true
    },
    thirdpage:{
        type:String,
        required:true
    },


})














module.exports=mongoose.model('Posts',postSchema)