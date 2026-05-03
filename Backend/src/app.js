const express = require("express");
const multer = require('multer');
const {ImageKit} = require("@imagekit/nodejs");
const postModel = require("./models/post.model.js")
const uploadFile = require("./services/storage.services.js");
const cors = require('cors');

const app = express();
app.use(express.json())
const upload = multer({storage:multer.memoryStorage()})
app.use(cors())


app.post('/create-post',upload.single('Image'),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const result = await uploadFile(req.file.buffer)
    console.log(result)

    const post =await postModel.create({
        image:result.url,
        caption:req.body.caption

    })
    return res.status(201).json({
        message:"Post Created",
        post
    })
})

app.get("/posts",async(req,res)=>{
    const post = await postModel.find()

    return res.status(201).json({
        message:"Fetched successfully",
        post
    })
})
module.exports= app;