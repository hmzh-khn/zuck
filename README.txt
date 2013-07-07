=============
DATABASE API
=============

exports.connect
--------------------------
Initiate connection to MongoDB.

exports.getPlayer(phoneNumber)
--------------------------
Returns the player object associated with phoneNumber and sets it as the current user.

exports.set(property, value)
--------------------------
Within the current player, sets property to value.

exports.send()
--------------------------
Sends changes to MongoDB. THIS MUST BE CALLED AFTER CHANGING DATA OR YOUR CHANGES WILL NOT SAVE.