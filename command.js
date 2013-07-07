var DEFAULT_USERS = 5;
var DEFAULT_COMPETITORS = [];
var DEFAULT_EMPLOYEES = 5;
var DEFAULT_FEATURES = [];
var DEFAULT_INVESTORS = 5;
var DEFAULT_MONEY = 500;

var GAMESTATE_STARTED = true;
var GAMESTATE_FINISHED = false;

// Game state functions
var initGame = function(phoneNumber) {
	//register user as player in db
	User.create({phoneNumber: phoneNumber,
				 gameState: GAMESTATE_STARTED,
				 currentBalance: DEFAULT_MONEY,
				 users: DEFAULT_USERS,
				 employees: DEFAULT_EMPLOYEES,
				 advertisers: DEFAULT_ADVERTISERS,
				 competitors: DEFAULT_COMPETITORS,
				 features: DEFAULT_FEATURES});
};

//done
var ipo = function(phoneNumber) {
	//remove user from db
	User.remove({phoneNumber: phoneNumber});
};

// User information
var help = function(phoneNumber) {
	//return help manual
	// if phone number is not listed
	// Zuck is a text-based Facebook Tycoon game. Text "new" to begin, or
	// "help" followed by any of these commands: "buy", "develop",
	// "report", "competition", "ipo"
	
	// if phone number is listed
	// 
	
	
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