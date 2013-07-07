var express = require('express'),
  http = require('http'),
  path = require('path'),
  stylus = require('stylus'),
  db = require('./db'),
  twilio = require('twilio'),
  command = require('./command');

var client = twilio('AC4ae2ff325dad1c269fac9fa9935cb6d0', '63f51e3d32ed6d0ebbaa46c6359e9cbe');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
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

app.get('/', function(req,res) {
  //if(dbBarf)
    res.render('index.jade');
  //else
    //res.render('index.jade', {'title': 'FAIL'});
});

receive = function(req, res) {
  var body = req.query.Body;
  var from = req.query.From;

  var response = command.parse(from, body.toLowerCase());;

  var resp = new twilio.TwimlResponse();
  resp.sms(response);
  res.send(resp.toString());
};

app.get('/receive', receive);
app.post('/receive', receive);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
