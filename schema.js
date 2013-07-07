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

}