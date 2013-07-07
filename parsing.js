var command;

var checkIfCommand = function(message) {
	command = false; //sets command to false when used again.
	if(var n = message.charAt(0) == #) { //checks for # at first char of message
		command = true;
	}
};

var arrayCommand;
// separates command to array
var seperateCommand = function(message){
	arrayCommand = message.split(" "); // variable n is an array
	//return n;
};


switch(arrayCommand[0]) {
	case 'help':
		help();
		break;
	case 'buy':
		for (var i = 1; i < n.length ; i++)
		{
			switch(arrayCommand[i])
			{
				case //needs param cases
			}
		}
		break;
	case 'new':
		initGame();
		break;
	case 'develop':
		for (var i = 1; i < n.length ; i++)
		{
			switch(arrayCommand[i])
			{
				case //needs param cases
			}
		}
		break;
	case 'report':
		state();
		break;
	case 'competition':
		report();
		break;
	default:
		textToUser('Sorry, we do not recognize that command.');
	}
}