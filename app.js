var express = require('express'),
  http = require('http'),
  path = require('path'),
  stylus = require('stylus'),
  db = require('./db'),
  CONFIG = require('./config.json');

process.env['TWILIO_ACCOUNT_SID'] = CONFIG.twilio_sid;
process.env['TWILIO_AUTH_TOKEN'] = CONFIG.twilio_auth_token;
process.env['TWILIO_PHONE_NUMBER'] = CONFIG.twilio_phone_number;

//continue requiring modules
var twil = require('./twil'),
  command = require('./command');

var app = express();

global.DATA = {};

twil.send('+15035629690', 'omg does it work?');

app.configure(function(){
  app.set('port', process.env.PORT || 8000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
}); 

app.configure('development', function(){
  app.use(express.errorHandler());
});

//connects to nodejitsu
//db.connect('mongodb://nodejitsu:2f433db5cd7603ca7382c95769d9ae59@dharma.mongohq.com:10063/nodejitsudb2038265378');
 
//var dbBarf = db.getPlayer('+15037296270');

//main page
app.get('/', function(req, res) {
  res.render('index.jade');
});

//developers page
app.get('/developers', function(req, res) {
  res.render('developers.jade');
});

app.get('/receive', twil.receive);
app.post('/receive', twil.receive);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
