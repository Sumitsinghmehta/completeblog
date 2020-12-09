const express=require("express");
const mongoose=require("mongoose");
const { MONGOURI }=require("./keys");
const app=express();
const PORT= 5000;

//connection to mongodb
mongoose.connect(MONGOURI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

mongoose.connection.on("connected", ()=>{
    console.log("connected to mongodb");
});

mongoose.connection.on("error", (error)=>{
    console.log("Error:"+error);
});

//models import 
require("./models/post");
require("./models/category");

app.use(express.json());
//route import
app.use(require("./routes/post"));
app.use(require("./routes/category"));


app.listen(PORT,()=>{
    console.log("Server is started at "+PORT);
});