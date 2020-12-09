const express =require("express");
const router = express.Router();
const mongoose=require("mongoose");
const Category=mongoose.model("Category");

router.get("/categories",(req,res)=>{
    Category.find()
    .populate("category","_id name")
    .then((categories) =>{
        res.json({categories});
    })
    .catch((err)=> {
        console.log(err);
    });
});
router.get("/new-categories",(req,res)=>{
    const {name} = req.body;
 
    if(!name){
     res.json({err:"All fields are required"});
    }
 
    const post =new Category({
        name,
     
    });
 
    post.save()
    .then(()=>{
        res.json({msg:"Category created"});
 
    })
    .catch((err)=>{
        console.log(err);
    });
});

module.exports = router;