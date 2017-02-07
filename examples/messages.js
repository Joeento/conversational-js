'use strict';
var Message = require('../message.js');
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
				return 3;
			}
			return 2;
		}
	},
	{
		id: 2,
		question: 'Okay, I\'ll leave you alone.',
		reply: 'Message me later if you change your mind.',
		react: function(answer_string) {
			return false;
		}
	},
	{
		id: 3,
		question: 'When do you want to make the message for?',
		reply: 'Got it!',
		process: function(answer_string) {
			return new Date(answer_string);
		},
		react: function(data) {
			//Cron logic goes here.
			return 4;
		}
	},
	{
		id: 4,
		question: 'What would you like the message to be?',
		reply: 'Thanks! Your reminder has been set.  You will recieve a message at your requested time.',
		process: function(answer_string) {
			return new Date(answer_string);
		},
		react: function(data) {
			return false;
		}
	}

];
module.exports = [];
for (var i = 0; i < messages.length; i++) {
	var message = new Message();
	for(var prop in messages[i]) {
		message[prop] = messages[i][prop];
	}
	module.exports[messages[i].id] = message;
}