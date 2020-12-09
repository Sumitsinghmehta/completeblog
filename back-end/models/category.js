const mongoose = require("mongoose");

const category = mongoose.Schema({
    name:{
        type:String,
        require: true,

    }
});
mongoose.model("Category",category);