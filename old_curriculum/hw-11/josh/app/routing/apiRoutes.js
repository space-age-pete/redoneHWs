var express = require("express");
var router = express.Router();

router.get("/friends", function(req, res){
    res.json({sup: "yes"});
})

router.post("/friends", function(req, res){
    res.json({sup: "no"});
})

module.exports = router;