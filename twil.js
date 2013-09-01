/********************************
TWIL DOCUMENTATION - twilio wrapper module

twil#send(phoneNumber, msg)
  1. sends text to phoneNumber

twil#receive
  Returns the body and sender of each text message
  originally calls the command module, but that leads to module function hell
  potentially add parsing to this function in the future

twil#getHistory
  Possibly uses conversation tracking to retrieve command history for user?
  I think twilio keeps track of it?

SUBJECT TO CHANGE AS I LEARN MORE ABOUT TWILIO

*********************************/

var twilio = require('twilio');
var command = require('./command');
var twilioNumber = process.env['TWILIO_PHONE_NUMBER'];
var client = twilio(process.env['TWILIO_ACCOUNT_SID'], process.env['TWILIO_AUTH_TOKEN']);

exports.send = function send(phoneNumber, msg) {
  client.sms.messages.create({
    body: msg,
    to: phoneNumber,
    from: twilioNumber
  }, function(err, message) {
    if(!err) console.log('sent message to '+phoneNumber);
    else console.error('ERR: '+err.message);
  });
};

//listens for incoming texts
exports.receiveInfo = function receive (req) {
  var body = req.param('body');
  var from = req.param('from');

  if(body && from) {
    return {
      body: body,
      from: from
    };
  }
  else {
    return null;
  }
};
