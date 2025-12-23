const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
res.sendFile('dummy.html',{root:__dirname});
})

router.post("/post",(req,res)=>{
res.send("Post data");
})

router.put("/put",(req,res)=>{
res.send("Put data");
})

router.delete("/del",(req,res)=>{
res.send("Delete data");
})

module.exports = router;