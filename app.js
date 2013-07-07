//hi
/**
 * Module dependencies.
 */

var express = require('express'),
  http = require('http'),
  path = require('path'),
  stylus = require('stylus'),
  redis = require('redis'),
  CONFIG = require('./CONFIG.json');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('redisPort', 6379);
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

var redis_cli = redis.createClient(6379,'127.0.0.1');

redis_cli.on('connect',function() {
  console.log('connected!');
  redis_cli.auth(CONFIG.redispass);
  console.log('authorized!');
  redis_cli.set('test','test');
  console.log(redis_cli.get('test'));
});

redis_cli.on('error',function() {
  console.error('ERROR!');
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', function(req,res) {
  res.render('index.jade');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
