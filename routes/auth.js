const User = require("../models/User");
const router = require("express").Router();
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

//REGISTER
router.post("/register",async (req,res)=>{
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
            
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
})

//LOGIN
router.post("/login",async (req,res)=>{
    try {
        const user = await User.findOne({username:req.body.username});
        !user && res.status(401).json("Wrong Credentials!");

        const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASS_SECRETE_KEY);
        const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        
        Originalpassword !== req.body.password && res.status(401).json("Wrong Credentials");

        const accessToken = jwt.sign({
            id:user._id,
            isAdmin : user.isAdmin,
        },process.env.JWT_SCRETE_KEY,
        {expiresIn:"3d"},
        );
        
        const { password, ...others } = user._doc;


        res.status(200).json({...others, accessToken});

    } catch (err) {
        res.status(500).json(err);
        return;
    }
})

module.exports = router; 