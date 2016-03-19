var express = require('express');
var app = express();
var routes = require('./public/server/routes/index');


app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});