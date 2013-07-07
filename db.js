db = require('mongoose'),
  Schema = db.Schema;

var playerSchema = mongoose.Schema({
  phone: Number,
  gameState: Boolean,
  
  balance: Number,
  users: Number,
  employees: Number,
  rpu: Number,
  competitors: Array,
  features: Array
});

var Player = db.model('Player', playerSchema);
var currentPlayerObj;

//initiate mongo connections
exports.connect = function connect(url) {
  url = url || 'mongodb://localhost/zuck';

  db.connect(url, function(err, res) {
    if (!err) {
      console.log('connected to mongo!');
    } 
    else {
      console.log('connection denied');
    }
  });
};

//passed a phoneNumber and a player object
exports.initPlayer = function initPlayer(phoneNumber, playerObject) {
  Player.create({phone: phoneNumber,
    balance: playerObject.balance,
    users: playerObject.users,
    employees: playerObject.employees,
    rpu: playerObject.rpu,
    competitors: playerObject.competitors,
    features: playerObject.features
  });
};

//get entire Player object
exports.getPlayer = function getPlayer(phoneNumber) {
  Player.find({phoneNumber:phoneNumber}, function(err, player) {
    currentPlayerObj = player; //sets this to variable for ease of updating?
    return player;
  });
};

//set individual values of the object to be sent back
exports.set = function set(property, value) {
  if (typeof property === 'string') {
    currentPlayerObj[property] = (currentPlayerObj[property])? value : undefined;
    return;
  }
  else {
    var prop = property[0];
    for(var i = 1; i < property.length - 1) {
      prop = (prop[property[i]])? prop[property[i]] : undefined;
    }
    prop[property[property.length - 1]] = (prop[property - 1])? value : undefined;
  }
  //if the property exists, update it, otehrwise do nothing
  //potential fallback, what a property is already nonexistant?
};

//update the data
exports.send = function send() {
  Player.update({phoneNumber : currentPlayerObj.phoneNumber}, currentPlayerObj);
};

exports.remove = exports.delete = function remove(phoneNumber) {
  User.remove({phoneNumber: phoneNumber});
};

