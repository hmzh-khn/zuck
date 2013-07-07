db = require('./db');

// db.getPlayer(); => Player obj
// db.set(property,value)
// db.send()

var player = db.getPlayer();

exports.competitorGeneration = function competitorGeneration(competitor_name) {

var competitor.users = Math.random() * (player.users);
var competitor.rpu = Math.random() * (player.rpu);
var competitor.employees = Math.random() * (player.employees);

var competitor.worth = Math.random() * (player.balance);
var tolerance = .1*competitor.worth;
return competitor
};