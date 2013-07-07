var DEFAULT_USERS = 5;
var DEFAULT_COMPETITORS = 5;
var DEFAULT_EMPLOYEES = 5;
var DEFAULT_FEATURES = 6;
var DEFAULT_INVESTORS = 5;
var DEFAULT_MONEY = 500;

var GAMESTATE_STARTED = true;
var GAMESTATE_FINISHED = false;

// Game state functions
var initGame = function(phoneNumber) {
	//register user as player in db
	client.set("uid:" + phoneNumber + ":users", DEFAULT_USERS);
	client.set("uid:" + phoneNumber, + ":gamestate", GAMESTATE_STARTED);
	client.set("uid:" + phoneNumber + ":competitors", DEFAULT_COMPETITORS);
	client.set("uid:" + phoneNumber + ":employees", DEFAULT_EMPLOYEES);
	client.set("uid:" + phoneNumber + ":features", DEFAULT_FEATURES);
	client.set("uid:" + phoneNumber + ":investors", DEFAULT_INVESTORS);
	client.set("uid:" + phoneNumber + ":money", DEFAULT_MONEY);
};
var ipo = function(phoneNumber) {
	//remove user from db
	client.set("uid:" + phoneNumber + ":gamestate", GAMESTATE_FINISHED);
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