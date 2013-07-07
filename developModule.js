exports.rand = function modify(min1,max1,min2,max2) {

db = require('./db');

var player = db.getPlayer();
	
var rand = Math.random() * (max - min) + min
db.set(users,(users) + rand*(users))

var rand = Math.random() * (max - min) + min
db.set(rpu, (rpu) + rand*(rpu))
};

db.set(employees, employees + 10)