exports.rand = function modify(min1,max1,min2,max2) {
var addon = require('./addons');
db = require('./db');

var modules = {
	chat: new Addon(0, .1, 0, 0),
	like: new Addon(0, .1, 0, .1),
	dislike: new Addon(0, .1, 0, .1),
	video: new Addon(0, .1, 0, 0),
	"interface": new Addon(-.2, .2, -.2, .2),
	custom: new Addon(0, .1, 0, .1),
	aprFools: new Addon(0, .1, 0, 0),
	wait: new Addon(0, .1, 0, .1),
	games: new Addon(0, .1, 0, .1),
	paid: new Addon(-.2, .2, 0, .1),
	face: new Addon(0, .1, 0, .1),
	wingman: new Addon(0, .1, 0, .1),
	adsSelect: new Addon(0, .1, 0, .1),
	adsUp: new Addon(0, .1, 0, .1),
	adsDown: new Addon(0, .1, 0, .1);
};

var player = db.getPlayer();

exports.applyModule = function applyModule(name) {
  var mod = modules[name];

  var randUsers = Math.random() * mod.max1 - mod.min1) + mod.min1
  db.set(player.phoneNumber,'users',(users) + rand*(users))

  var randRpu = Math.random() * (mod.max2 - mod.min2) + mod.min2
  db.set(player.phoneNumber,'rpu', (player.rpu) + randUsers*(player.rpu))
  };

  db.set(player.phoneNumber,'employees', player.employees + 10)
};
