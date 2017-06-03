'use strict';
var Message = require('./message');

function Conversation() {
	this.state = 1;
	this.Conversations = [];
}


Conversation.prototype.loadMessages = function(message_collection) {
	for (var i = 0; i < message_collection.length; i++) {
		var message = new Message();
		for(var prop in message_collection[i]) {
			message[prop] = message_collection[i][prop];
		}
		this.messages[message_collection[i].id] = message;
	}

};

Conversation.prototype.getMessage = function() {
	return this.messages[this.state];
};

Conversation.prototype.ask = function(answer_string, callback) {
	var message = this.getMessage();
	return message.ask();
};

Conversation.prototype.answer = function(answer_string, callback) {

};

Conversation.prototype.respond = function(answer_string, callback) {
	var message = this.getMessage();
	return message.respond();
};

module.exports = Conversation;