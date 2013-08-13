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

