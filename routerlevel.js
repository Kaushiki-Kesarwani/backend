const express = require('express');
const router = express.Router();


const loggingMiddleware = function(req,res,next){
    console.log("Log in...");
    next();
}

router.use(loggingMiddleware);

const authMiddleware = function(req,res,next){
    console.log("Authentication required!");
    next();
}

router.use(authMiddleware);

const validMiddleware = function(req,res,next){
    console.log("Valid !");
    next();
}

router.use(validMiddleware);

router.get('/',(req,res,next)=>{
    try{
        let a = 10;
        let b = a / x;
       res.send("Success")
    }catch(err){
        next(err);
    }
});

//error handling middleware

router.get('/get',(req,res)=>{
   console.log(req.body);
   res.send("Hello world");
})

router.post('/post',(req,res)=>{
    res.send("Post your data");
})

router.use((err,req, res, next)=>{
console.error(err.stack);
res.status(500).send('Something Broke');
});


module.exports = router;