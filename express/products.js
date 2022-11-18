var express = require('express');
var router = express.Router();


router.get('/', (req, res) =>{
    res.send("Product Page");
});

router.post('/', (req, res) =>{
    res.send("Product Page POST")
});

//export the router to use it in our index.js
module.exports = router;

