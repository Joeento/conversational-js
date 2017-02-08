'use strict';

function Conversation() {
	this.state = 1;
	this.Conversations = [];
}
Conversation.prototype.getQuestion = function() {
	return this.messages[this.state].question;
};

module.exports = Conversation;