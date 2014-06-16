var express = require("express");
var morgan = require("morgan");
var app = express();
var fs = require('fs');
var config = require('./config');

app.set('port', config.apizor.port);

app.use(morgan({
  format: 'dev'
}));

app.use(express.static(__dirname + '/public'));

// API calls
app.get(/^(api)\/(.+)/, function(req, res) {
  res.json({message: 'OK!'});
});

// All other calls
app.get(/^(?!api)(.+)/, function(req, res, next) {
  fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, html) {
    res.write(html);
    res.end();
  });
});

var server = app.listen(app.get('port'), function() {
  console.log('Server started on port:', server.address().port);
});
