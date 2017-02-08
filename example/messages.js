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
			if (yes_options.indexOf(answer_string.toLowerCase()) > -1) {
				return 'yes';
			} else if (no_options.indexOf(answer_string.toLowerCase()) > -1) {
				return 'no';
			}
			return false;
		},
		react: function(data) {
			if (data === 'yes') {
				return 2;
			} else if (data === 'no') {
				this.reply = 'I\'ll leave you alone then. Message me later if you change your mind.';
				return false;
			}
		}
	},
	{
		id: 2,
		question: 'When do you want to make the message for?',
		reply: 'Got it!',
		process: function(answer_string) {
			return new Date(answer_string);
		},
		react: function(data) {
			//Cron logic goes here.
			return 3;
		}
	},
	{
		id: 3,
		question: 'What would you like the message to be?',
		reply: 'Thanks! Your reminder has been set.  You will recieve a message at your requested time.',
		process: function(answer_string) {
			return new Date(answer_string);
		},
		react: function(data) {
			//Name save goes here
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