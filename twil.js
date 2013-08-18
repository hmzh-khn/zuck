/********************************
TWIL DOCUMENTATION - personal twilio

twil#send(phoneNumber, msg)
  1. sends text to phoneNumber

twil#listen
  do i need this?
  LEARN MORE ABOUT TWILIO

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
    console.log('sent message to'+phoneNumber);
  });
};

exports.receive = function receive (req, res) {
  var body = req.query.Body;
  var from = req.query.From;

  var response = command.parse(from, body);

  var resp = new twilio.TwimlResponse();
  resp.sms(response);
  res.send(resp.toString());
};

exports.twilio = twilio;