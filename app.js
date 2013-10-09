var express = require('express'),
  http = require('http'),
  path = require('path'),
  _ = require('underscore'),
  stylus = require('stylus'),
  db = require('./db'),
  CONFIG = require('./config.json');

//This is the only way I can securely do this (twilio doesnt allow any variables to set the options except process obj)
process.env['TWILIO_ACCOUNT_SID'] = CONFIG.twilio_sid;
process.env['TWILIO_AUTH_TOKEN'] = CONFIG.twilio_auth_token;
process.env['TWILIO_PHONE_NUMBER'] = CONFIG.twilio_phone_number;

//continue requiring modules
  var twil = require('./twil');
  command = require('./command');

var app = express();

db.connect('mongodb://localhost/zuck', function(err) {
  if(!err) console.log('\n\n\n=============== connected to mongo! ================\n\n');
  else killProc('Connection to mongo database failed.');
});

global.DATA = {};

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

var listenForTexts = function(req, res) {
  var msgInfo = twil.receiveInfo(req);

  if(msgInfo) {
    /* Call command parsing methods here */
    var returnMessage = command.parse(msgInfo.from, msgInfo.body);

    twil.send(msgInfo.from, returnMessage);
  }
  else {
    console.error('ERROR: No message text or no phoneNumber');
    twil.send('ERROR: No message text or no phoneNumber!');
  }
};

app.get('/receive', listenForTexts);
app.post('/receive', listenForTexts);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

var killProc = function killProc(message) {
  console.log(message);
  console.log('\nExiting...');
  process.exit();
};

