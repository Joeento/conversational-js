'use strict';

var messages = [
	{
		id: 1,
		question: 'Hi! Would you like to schedule a reminder for later?',
		reply: 'Ok!',
		process: function(answer_string) {
			var yes_options = ['yes', 'yes please', 'yeah', 'sure', 'ok', 'definitely'];
			var no_options = ['no', 'no thanks', 'nope', 'not now', 'no thank you', 'i don\'t think so'];
			if (yes_options.indexOf(answer_string.toLowerCase())) {
				return 'yes';
			} else if (no_options.indexOf(answer_string.toLowerCase())) {
				return 'no';
			}
			return false;
		},
		react: function(data) {
			if (data === 'yes') {
				return 1;
			}
			return 2;
		}
	}

];