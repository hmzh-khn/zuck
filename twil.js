/********************************
TWIL DOCUMENTATION - personal twilio

twil#send(text, phoneNumber)
  1. sends text to phoneNumber

twil#listen
  do i need this?
  LEARN MORE ABOUT TWILIO

SUBJECT TO CHANGE AS I LEARN MORE ABOUT TWILIO

*********************************/

var twilio = require('twilio');
var command = require('./command');

exports.receive = function receive (req, res) {
  var body = req.query.Body;
  var from = req.query.From;

  var response = command.parse(from, body);

  var resp = new twilio.TwimlResponse();
  resp.sms(response);
  res.send(resp.toString());
};

exports.twilio = twilio;