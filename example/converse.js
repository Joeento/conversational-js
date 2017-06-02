'use strict';

var readline = require('readline-sync');
var messages = require('./messages');

var chat = function(index, prevIndex, callback) {
	if (prevIndex > 0) {
		var prevMessage = messages[prevIndex];
		console.log(prevMessage.respond());
	}
	if (index === false) {
		return;
	}
	var message = messages[index];
	console.log(message.ask());
	var answer = readline.question();
	message.answer(answer, callback);
};

chat(1, 0, chat);
