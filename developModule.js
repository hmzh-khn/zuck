exports.rand = function modify(min1,max1,min2,max2) {
var addon = require('./addons');
db = require('./db');

var modules = {
	chat: new Addon(0, .1, 0, 0),
	like: new Addon(0, .1, 0, .1),
	dislike: new Addon(0, .1, 0, .1),
	video: new Addon(0, .1, 0, 0),
	interface: new Addon(-.2, .2, -.2, .2),
	custom: new Addon(0, .1, 0, .1),
	aprFools: new Addon(0, .1, 0, 0),
	wait: new Addon(0, .1, 0, .1),
	games: new Addon(0, .1, 0, .1),
	paid: newAddon(-.2, .2, 0, .1),
	face: newAddon(0, .1, 0, .1),
	wingman: newAddon(0, .1, 0, .1),
	adsSelect: newAddon(0, .1, 0, .1),
	adsUp: newAddon(0, .1, 0, .1),
	adsDown: newAddon(0, .1, 0, .1);
};

var player = db.getPlayer();
	
var rand = Math.random() * (max - min) + min
db.set(player.phoneNumber,users,(users) + rand*(users))

var rand = Math.random() * (max - min) + min
db.set(player.phoneNumber,rpu, (rpu) + rand*(rpu))
};

db.set(player.phoneNumber,employees, employees + 10)