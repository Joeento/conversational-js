'use strict';

function Message() {
	this.id = 1;
	this.question = '';
	this.reply = '';
}
Message.prototype.process = function(answer_string) {
	return answer_string;
};
Message.prototype.react = function(data) {
	return false;
};
Message.prototype.answer = function(answer_string) {
	var data = this.process(answer_string);
	if (!data) {
		this.reply = 'I\'m sorry, I\'ve gotten confused.  Let\'s go back.';
		return this.id;
	}
	return this.react(data);
};
module.exports = Message;