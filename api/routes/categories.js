var express = require("express");
var router = express.Router();

//simple auth example
const isAuth = true;
router.all("*",(req,res,next) => {
    if (isAuth) {
        next()
    }else {
        res.json({succes:false,error:"Not auth !"})
    }
})
//

router.get("/",(req,res,next) => {
    res.json({succes:true,message:"Succesfully login"})
})

module.exports = router;