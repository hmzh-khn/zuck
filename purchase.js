exports.purchase = function purchase(offer,competitor) {

var users = ,
rpu = ,
emp = ,
balance = ;

if (offer > competitor_worth - tolerance) {
	(users) = (users) + competitor['users'];
	(rpu) = (rpu)*((users)/(users + competitor['users'])) + competitor['rpu']*((competitor['users'])/(users + competitor['users']));
	(emp) = (emp) + competitor['emp'];
	(balance) = (balance) - offer
}
};