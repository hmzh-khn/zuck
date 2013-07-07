var db = require('./db')
var player = db.getPlayer();
var competitor = require('./competitorGeneration');

// MODIFY exports.purchase = function purchase(offer,competitor) {

// Does db.set modify the player characteristics by default?
// Does the first element (the property) have to be a string to redefine it?
exports.negotiation = function negotiation(offer) {
  if (offer > competitor.worth - competitor.tolerance) {
  	db.set('users', (player.users + competitor.users);
  	db.set('rpu', (player.rpu)*((player.users)/(player.users + competitor.users)) + competitor.rpu*((competitor.users)/(player.users + competitor.users)));
  	db.set('employees', (player.employees) + competitor.emp);
  	db.set('balance', (player.balance) - offer);
    return "Negotiation Successful! \nYou have bought the company\nSee report for new stats!"
  }
  else {
    return "This round of negotiations failed. This company has eluded your grasp."
  }
};
