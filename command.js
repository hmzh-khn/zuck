var DEFAULT_USERS = 5;
var DEFAULT_COMPETITORS = 5;
var DEFAULT_EMPLOYEES = 5;
var DEFAULT_FEATURES;
var DEFAULT_INVESTORS = 5;
var DEFAULT_MONEY = 500;

var GAMESTATE_STARTED = true;
var GAMESTATE_FINISHED = false;

// Game state functions
var initGame = function(phoneNumber) {
	//register user as player in db
	//HSET uid:phone_number users DEFAULT_USERS
	client.hset("uid:" + phoneNumber, "users", DEFAULT_USERS);
	//HSET uid:phone_number gamestate GAMESTATE_STARTED
	//HSET uid:phone_number competitors DEFAULT_COMPETITORS
	//HSET uid:phone_number employees DEFAULT_EMPLOYEES
	//HSET uid:phone_number features DEFAULT_FEATURES
	//HSET uid:phone_number investors DEFAULT_INVESTORS
	//HSET uid:phone_number money DEFAULT_MONEY
};
var ipo = function(phoneNumber) {
	//remove user from db
	//HSET uid:phone_number:gamestate GAMESTATE_FINISHED
};

// User information
var help = function(phoneNumber) {
	//return help manual
	
	
};
var state = function(phoneNumber) {
	//return
	
	
};
var report = function(phoneNumber) {

};

//User interaction
var buy = function(phoneNumber, company) {
	//lookup amount for company
	//remove amount from current balance
};

var devProject = function(phoneNumber, project) {
	//auto
};