var db = require('./db')
var player = db.getPlayer();
var competitor = require('./competitorGeneration')

// MODIFY exports.purchase = function purchase(offer,competitor) {

// Does db.set modify the player characteristics by default?
// Does the first element (the property) have to be a string to redefine it?
<<<<<<< HEAD
exports.negotiation = function negotiation() {
  if (offer > competitor.worth - tolerance) {
  	db.set(users,(users) + competitor.users);
  	db.set(rpu, (rpu)*((users)/(users + competitor.users)) + competitor.rpu*((competitor.users)/(users + competitor.users)));
  	db.set(employees, (emp) + competitor.emp);
  	db.set(balance, (balance) - offer);
  }
};
=======

if (offer > competitor.worth - tolerance) {
	db.set(player.phoneNumber,users,(users) + competitor.users);
	db.set(player.phoneNumber,rpu, (rpu)*((users)/(users + competitor.users)) + competitor.rpu*((competitor.users)/(users + competitor.users)));
	db.set(player.phoneNumber,employees, (emp) + competitor.emp);
	db.set(player.phoneNumber,balance, (balance) - offer);
}
};


// +15037296270
>>>>>>> c751373e0e230a50dfaf4b9a48a85ab67f99a492
