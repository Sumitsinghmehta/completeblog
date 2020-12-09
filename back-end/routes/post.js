const express =require("express");
const router = express.Router();
const mongoose=require("mongoose");
const Post=mongoose.model("Post");

router.get("/posts",(req,res)=>{
    Post.find()
    .populate("category","_id name")
    .then(posts =>{
        res.json({posts});
    })
    .catch((err)=> {
        console.log(err);
    });
});
router.get("/new-post",(req,res)=>{
   const {tittle,description,imgURl} = req.body;

   if(!tittle||!description||!imgURl){
    res.json({err:"All fields are required"});
   }

   const post =new Post({
       tittle,
       description,
       imgURl,
    
   });

   post.save()
   .then(()=>{
       res.json({msg:"Post created"});

   })
   .catch((err)=>{
       console.log(err);
   });
});
module.exports = router;