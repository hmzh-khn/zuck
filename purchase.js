var db = require('./db')
var player = db.getPlayer();
var competitor = require('./competitorGeneration')

// MODIFY exports.purchase = function purchase(offer,competitor) {

// Does db.set modify the player characteristics by default?
// Does the first element (the property) have to be a string to redefine it?

if (offer > competitor.worth - tolerance) {
	db.set(users,(users) + competitor.users);
	db.set(rpu, (rpu)*((users)/(users + competitor.users)) + competitor.rpu*((competitor.users)/(users + competitor.users)));
	db.set(employees, (emp) + competitor.emp);
	db.set(balance, (balance) - offer);
}
db.send()
};