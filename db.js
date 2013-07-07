db = require('mongoose'),
  Schema = db.Schema;

var userSchema = mongoose.Schema({
  phoneNumber: Number,
  gamestate: Boolean,
  
  currentBalance: Number,
  users: Number,
  employees: Number,
  advertisers: Number,
  competitors: Array,
  features: Array
});

var User = db.model('User', userSchema);
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
  User.create({phoneNumber: phoneNumber,
    gameState: playerObject.gameState,
    currentBalance: playerObject.currentBalance,
    users: playerObject.users,
    employees: playerObject.employees,
    advertisers: playerObject.advertisers,
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
  User.update({phoneNumber : currentPlayerObj.phoneNumber}, currentPlayerObj);
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
