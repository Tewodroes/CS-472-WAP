var express = require('express');
var app = express();

var products = require('./products.js');
var main = require('./main.js');

app.use('/', main);
app.use('/products', products);

app.get('/:id', (req, res) => {
    res.send("ID is: "+req.params.id);
});

app.get('/products/:name/:id([0-9]{3})', (req, res) => {
    res.send('id: '+req.params.id+' and name: '+req.params.name);
});

// For invalid urls

app.get('*', (req, res) => {
    res.send("Invalid URL");
})

app.listen(3000, ()=>{
    console.log("Server Listening...");
})