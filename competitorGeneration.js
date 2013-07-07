db = require('./db');

// db.getPlayer(); => Player obj
// db.set(property,value)
// db.send()

var player = db.getPlayer();

exports.competitorGeneration = function competitorGeneration(competitor_name) {

var competitor.users = rand(0,player.users),
competitor.rpu = rand(0,player.rpu),
competitor.emp = rand(0,player.emp),

competitor.worth = rand(0,player.balance),
tolerance = .1*competitor.worth;
return competitor
};