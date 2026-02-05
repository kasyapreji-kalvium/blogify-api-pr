const express = require("express"); //importing express

const router = express.Router(); //creating a router object

router.get("/", (req,res) =>{
    res.send("This message is coming from modular routes folder"); //sending a response to the client

});

module.exports = router; //exporting the router object to be used in other files