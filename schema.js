//User schema
var userSchema = mongoose.Schema({
	phoneNumber: Number,
	gamestate: Boolean,
	
	money: Number,
	users: Number,
	employees: Number,
	advertisers: Number,
	competitors: Array,
	features: Array
	
});

var User = mongoose.model('User', schema);