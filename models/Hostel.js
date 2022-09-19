const mongoose = require("mongoose")

const HostelSchema = new mongoose.Schema({
    hostelName : {type:String, required:true, unique:true},
    description : {type:String, required:true},
    price : {type:Number, required:true},
    
},{timestamps:true})


module.exports = mongoose.model("Hostel",HostelSchema);