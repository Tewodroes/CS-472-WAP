var express = require('express');
var router  = express.Router();

router.get('/', (req, res) => {
    res.send("Main Page");
});


router.post('/', (req, res) => {
    res.send("Main Page POST");
});

module.exports = router;