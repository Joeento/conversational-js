'use strict';

var readline = require('readline-sync');
var messages = require('./messages');
var index = 1;
while (index !== false) {
	var message = messages[index];
	console.log(message.question);
	var answer = readline.question();
	index = message.answer(answer);
	console.log(message.reply);
}