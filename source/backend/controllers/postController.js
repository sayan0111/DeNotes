const Post=require("../models/Post")

const post_all= async (req,res)=>{
  try{
      const posts=await Post.find()
      res.json(posts)

  }catch(error){
      res.json({message:error})
  }
}


const post_details=async(req,res)=>{
    try{
        const post=await Post.findById(req.params.postId)
        res.json(post)
  
    }catch(error){
        res.json({message:error})
    }
}

const post_create=async(req,res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description,
        thumbnail:req.body.thumbnail,
        price:req.body.price,
        subject :req.body.subject,
        department:req.body.department,
        semester:req.body.semester,
        firstpage:req.body.firstpage,
        secondpage:req.body.secondpage,
        thirdpage:req.body.thirdpage
    })

    try{
        const savedPost=await post.save()
        res.send(savedPost)

    }catch(error){
        res.status(400).send(error)
    }
}

const post_update=async(req,res)=>{
    try{
        const post={
            title:req.body.title,
            description:req.body.description,
            thumbnail:req.body.thumbnail,
            price:req.body.price,
            subject :req.body.subject,
            department:req.body.department,
            semester:req.body.semester,
            firstpage:req.body.firstpage,
            secondpage:req.body.secondpage,
            thirdpage:req.body.thirdpage
        }

        const updatedPost=await Post.findByIdAndUpdate(
            {_id:req.params.postId},
            post
        )
        res.json(updatedPost)
    }catch(error){
        res.json({message:error})
    }
}


const post_delete=async(req,res)=>{
    try{
        const removePost=await Post.findByIdAndDelete(req.params.postId)
        res.json(removePost)
    }catch(error){
        res.json({message:error})
    }
}
module.exports={
    post_all,
    post_details,
    post_create,
    post_update,
    post_delete
}