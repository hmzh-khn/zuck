process.DATA = {};

var db = require('./db'),
	_ = require('underscore');

/*var DEFAULT_USERS = 5;
var DEFAULT_COMPETITORS = [];
var DEFAULT_EMPLOYEES = 5;
var DEFAULT_FEATURES = [];
var DEFAULT_INVESTORS = 5;
var DEFAULT_MONEY = 500;
var DEFAULT_RPU = 1;*/

// create user through db API
var initGame = function(phoneNumber) {
	db.initPlayer(phoneNumber, {
		/*balance: DEFAULT_MONEY,
		users: DEFAULT_USERS,
		employees: DEFAULT_EMPLOYEES,
		rpu: DEFAULT_RPU,
		competitors: DEFAULT_COMPETITORS,
		features: DEFAULT_FEATURES*/
	});

	return "New game created for " + phoneNumber + ". See help for more information."
};

//remove user's game
var ipo = quit = function(phoneNumber) {
	db.remove(phoneNumber);
	return phoneNumber + " has been successfully removed from our database.";
};

// User information
var help1 = function(phoneNumber) {
	help = "Zuck is a text-based Facebook Tycoon game.\n Text \
	'help' followed by any of these commands: 'new', 'buy', 'develop', \
	'report', 'competition', 'ipo'."

	return help;

	//return help manual
	// if phone number is not listed
	// Zuck is a text-based Facebook Tycoon game. Text "new" to begin, or
	// "help" followed by any of these commands: "buy", "develop",
	// "report", "competition", "ipo"
	
	// if phone number is listed
	// 
};

var report = function(phoneNumber, options) {
	var player = db.getPlayer(phoneNumber);
	var res = "STATUS REPORT\n";

	if(_.isEmpty(options)) {
		_.each(options, function(value, key) {
			res += key + ": " + player[key] + "\n";
		});	
		return res;
	}
	else {
		_.each(options, function(value, key) {
			res += key + ": " + player[key] + "\n";
		});
		return res;
	}
};

//User interaction
var buy = function(phoneNumber) {
	var buyout = require('./purchase');
	
};

var devProject = function(phoneNumber, project) {
	
};

var commands = {
	"new": initGame,
	quit: ipo,
	ipo: ipo,
	help1: help1,
	report: report,
	buy: buy,
	develop: devProject
};

exports.parse = function(phoneNumber, text) {
	var input = text.split(" ");
	var commandFunc = commands[input.shift()];

	if(_.isFunction(commandFunc)) {
		var output = commandFunc(phoneNumber, input);
		return output;
	}
	else {
		return "Command is not recognized. Please try again or see help for more information."
	}
};
