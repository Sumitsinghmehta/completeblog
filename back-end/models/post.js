const mongoose = require("mongoose");
const {ObjectId} =mongoose.Schema.Types;
const post = mongoose.Schema({
    title:{
        type:String,
        require: true,

    },
    description:{
        type:String,
        require: true,

    },
    imgUrl:{
        type:String,
        require: true,

    },
    category:{
        type:ObjectId,
        ref: "Category",

    }
});
mongoose.model("Post",post);