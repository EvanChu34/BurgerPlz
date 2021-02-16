var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req,res){
    burger.selectAll(function (data){
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    })  
})

router.post("/burger", function (req,res){
    burger.insertOne(
        ["name"],
        [req.body.name],
        function(){
            res.redirect("/")
    })  
})

router.put("/burgers/:id", function (req,res){
    var condition = "id = " + req.params.id
    
    burger.updateOne({
        devoured: true
    }, condition, function(data){
        res.redirect("/");
    })  
})

module.exports = router;