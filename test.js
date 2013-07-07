//require the Twilio module and create a REST client
var client = require('twilio')('AC4ae2ff325dad1c269fac9fa9935cb6d0', '63f51e3d32ed6d0ebbaa46c6359e9cbe');

//Send an SMS text message
client.sendSms({

    to:'+5037296270', // Any number Twilio can deliver to
    from: '+9712051258', // A number you bought from Twilio and can use for outbound communication
    body: 'does this work?' // this of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+9712051258"
        console.log(responseData.body); // outputs "does this work?"

    } else {
        console.log(err);
    }
});