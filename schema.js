//User schema
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

var User = mongoose.model('User', schema);

var getGameState = function(phoneNumber) {
	return User.find({phoneNumber: phoneNumber} , 'gamestate', function(err, user) {
		return user.gamestate;
	});
}
var getCurrentBalance = function(phoneNumber) {
	return User.find({phoneNumber: phoneNumber}, 'currentBalance', function(err, user) {
		return user.currentBalance;
	});
}
var getUsers = function(phoneNumber) {
	return User.find({phoneNumber: phoneNumber}, 'users', function(err, user) {
		return user.users;
	});
}
var getEmployees = function(phoneNumber) {
	return User.find({phoneNumber: phoneNumber}, 'employees', function(err, user) {
		return user.employees;
	});
}
var getAdvertisers = function(phoneNumber) {
	return User.find({phoneNumber: phoneNumber}, 'advertisers', function(err, user) {
		return user.advertisers;
	});
}
var getCompetitors = function(phoneNumber) {
	return User.find({phoneNumber: phoneNumber}, 'competitors', function(err, user) {
		return user.competitors;
	});
}

var setGameState = function(phoneNumber, state) {
	
}
var setCurrentBalance = function(phoneNumber, newBalance) {

}
var setUsers = function(phoneNumber, newUsers) {

}
var setEmployees = function(phoneNumber, newEmployees) {

}
var setAdvertisers = function(phoneNumber, newAdvertisers) {

}
var setCompetitors = function(phoneNumber, newCompetitors) {

}