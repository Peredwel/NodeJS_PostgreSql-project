var express = require('express');
var app = express();
var routes = require('./public/server/routes/index');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname + '/public' + '/client'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});