
var express = require('express');
var app = express();
app.set('views', './')
app.set('view engine', 'twig');
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.render('index.twig');
});

app.listen(8080, function () {
    console.log('Example app listening on port 3000!')
  })
