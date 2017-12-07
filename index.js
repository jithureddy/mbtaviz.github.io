var express = require('express');
var app = express();
var path = require('path');


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
})

app.get('/index.html', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
})

//app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/data', express.static(__dirname + '/data'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/media', express.static(__dirname + '/media'));
app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'))
})