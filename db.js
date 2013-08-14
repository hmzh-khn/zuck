/******************************
DB DOCUMENTATION

  The db module facilitates all interactions between the Mongo database 
and the express server. It uses Mongoose to create a schema that is 
created whenever a unique user starts a game, and is destroyed whenever
a user ends or loses a game.

db#connect(url)
  1. Creates a connection to the Mongo server using Mongoose
  2. Successful connections log out `Connected to Mongo`
    a. calls back an optional function
  3. Errors print the error and shut down the server

db#playerExists(phoneNumber)
  1. Checks and returns (T/F) whether a user has an ongoing game

db#initPlayer(phoneNumber)
  1. This is called when a player does not have an ongoing game
    a. If the game is ongoing, return some type of confirmation message
       to the user to ask if they want to end current game and begin anew
  2. Create a new instance of a Player object, using default values
  3. Return the player object?

db#getPlayer || db#get(phoneNumber)
  1. Retrieve entire player object
  2. Return to caller

db#get(phoneNumber, object of attributes to get)
  1. This would get the attributes of the player that are asked for
  2. It would save server memory(not by much)
  3. Is this worth the effort? (I don't think so)

db#set(phoneNumber, valuesObject)
  1. Update the Player with new values from the object provided

======== BIG IDEA ==========
Should I make these asynchronously call functions after completion?
Might be a good idea

******************************/

db = require('mongoose'),
  Schema = db.Schema;

var playerSchema = db.Schema({
  phoneNumber: Number,
  gameState: Boolean,
  commandHistory: Array,
  
  balance: Number,
  users: Number,
  employees: Number,
  revenuePerUser: Number,
  competitors: Array,
  features: Array
});

var Player = db.model('Player', playerSchema);

//initiate mongo connections
exports.connect = function connect(url) {
  url = url || 'mongodb://localhost/zuck';

  db.connect(url, function(err, res) {
    console.log('ran connect function');
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
  global.DATA[phoneNumber] = {
    phoneNumber: phoneNumber,
    balance: playerObject.balance || 500,
    users: playerObject.users || 5,
    employees: playerObject.employees || 5,
    revenuePerUser: playerObject.revenuePerUser || 1,
    competitors: playerObject.competitors || [],
    features: playerObject.features || []
  };

  console.log(global.DATA);
    /*Player.create({
    phoneNumber: phoneNumber,
    balance: playerObject.balance,
    users: playerObject.users,
    employees: playerObject.employees,
    revenuePerUser: playerObject.revenuePerUser,
    competitors: playerObject.competitors,
    features: playerObject.features
  });*/
};

//get entire Player object
exports.getPlayer = function getPlayer(phoneNumber) {
  return (global.DATA[phoneNumber])? global.DATA[phoneNumber] : this.initPlayer(phoneNumber,{});

  /*Player.find({phoneNumber:phoneNumber}, function(err, player) {
    currentPlayerObj = player; //sets this to variable for ease of updating?
    return player;
  });*/
};

//set individual values of the object to be sent back
exports.set = function set(phoneNumber, property, value) {
  if(global.DATA[phoneNumber][property]) {
    global.DATA[phoneNumber][property] = value;
  }

  /*if (typeof property === 'string') {
    currentPlayerObj[property] = (currentPlayerObj[property])? value : undefined;
    return;
  }
  else {
    var prop = property[0];
    for(var i = 1; i < property.length - 1; i++) {
      prop = (prop[property[i]])? prop[property[i]] : undefined;
    }
    prop[property[property.length - 1]] = (prop[property - 1])? value : undefined;
  }*/
  //if the property exists, update it, otehrwise do nothing
  //potential fallback, what a property is already nonexistant?
};

//update the data
/*exports.send = function send() {
  Player.update({phoneNumber : currentPlayerObj.phoneNumber}, currentPlayerObj);
};*/

exports.remove = exports.delete = function remove(phoneNumber) {
  delete global.DATA[phoneNumber];


  //User.remove({phoneNumber: phoneNumber});
};

