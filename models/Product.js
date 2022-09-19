const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title : {type:String, required:true,},
    description : {type:String, required:true},
    img : {type:String, required:true},
    productby : {type:String,required:true},
    price : {type:Number,required:true},
    rating : {type:Number},
    categories : {type:Array},
   
},{timestamps:true})


module.exports = mongoose.model("Product",ProductSchema);