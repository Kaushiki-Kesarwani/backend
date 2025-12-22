const express = require('express');
const router = express.Router();

/* AUTH MIDDLEWARE */
const auth = function(req, res, next){
    console.log("I am inside authentication middleware");

    // dummy user
    req.user = { userid: 1, role: "student" };

    if(req.user){
        next();
    } else {
        return res.json({
            success: false,
            message: "Not a valid user"
        });
    }
};

/* STUDENT MIDDLEWARE */
const isstudent = function(req, res, next){
    console.log("I am inside student middleware");

    if(req.user.role === "student"){
        next();
    } else {
        return res.json({
            success: false,
            message: "Access Denied, students only"
        });
    }
};

/* ADMIN MIDDLEWARE */
const isadmin = function(req, res, next){
    console.log("I am inside admin middleware");

    if(req.user.role === "admin"){
        next();
    } else {
        return res.json({
            success: false,
            message: "Access Denied, admins only"
        });
    }
};

/* ROUTES */
router.get("/student", auth, isstudent, (req, res) => {
    console.log("I am inside student route");
    res.send("Student specific page");
});

router.get("/admin", auth, isadmin, (req, res) => {
     console.log("I am inside admin route");
    res.send("Admin specific page");
});

module.exports = router;
