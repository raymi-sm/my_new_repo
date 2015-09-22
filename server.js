var express = require('express');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
var app = express();
var servidor;
var port = process.env.BASKET_APP_PORT;

servidor = app.listen(port, function(){
  console.log("the server is good to go :3");
});

app.get("/", function(req, res){
  res.sendFile( __dirname + "/public/index.html");
});

var srcPath = __dirname + '/sass';
var destPath = __dirname + '/public/styles';

app.use('/styles',sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'compressed'
}));

app.use(express.static(path.join(__dirname, 'public')));

console.log('Server listening on port ' + port);
console.log('srcPath is ' + srcPath);
console.log('destPath is ' + destPath);
