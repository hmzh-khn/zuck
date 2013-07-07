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
  db.connect('mongodb://localhost/zuck', function(err, res) {
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
  User.create({phoneNumber: phoneNumber,
    gameState: playerObject.gameState,
    balance: playerObject.currentBalance,
    users: playerObject.users,
    employees: playerObject.employees,
    rpu: playerObject.advertisers,
    competitors: playerObject.competitors,
    features: playerObject.features
  });
};

//get entire Player object
exports.getPlayer = function getPlayer(phoneNumber) {
  User.find({phoneNumber:phoneNumber}, function(err, player) {
    currentPlayerObj = player; //sets this to variable for ease of updating?
    return player;
  });
};

//set individual values of the object to be sent back
exports.set = function set(property, value) {
  //if the property exists, update it, otehrwise do nothing
  //potential fallback, what a property is already nonexistant?
  currentPlayerObj[property] = (currentPlayerObj[property])? currentPlayerObj[property] : undefined;
};

//update the data
exports.send = function send() {
  Player.update({phoneNumber : currentPlayerObj.phoneNumber}, currentPlayerObj);
};

//Add setter functions?

/* SHOULD NOT NEED THIS INFORMATION
exports.getGameState = function(phoneNumber) {
  return User.find({phoneNumber: phoneNumber} , 'gamestate', function(err, user) {
    return user.gamestate;
  })
}

var getCurrentBalance = function(phoneNumber) {
  return User.find({phoneNumber: phoneNumber}, 'currentBalance', function(err, user) {
    return user.currentBalance;
  })
}
var getUsers = function(phoneNumber) {
  return User.find({phoneNumber: phoneNumber}, 'users', function(err, user) {
    return user.users;
  });
}
var getEmployees = function(phoneNumber) {

}
var getAdvertisers = function(phoneNumber) {

}
var getCompetitors = function(phoneNumber) {

}*/
