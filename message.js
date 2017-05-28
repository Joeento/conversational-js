'use strict';

function Message() {
	this.id = 1;
	this.question = '';
	this.reply = '';
	this.reply_override = '';
}
Message.prototype.ask = function() {
	return this.question;
};
Message.prototype.respond = function() {
	return this.reply_override ? this.reply_override : this.reply;
};
Message.prototype.process = function(answer_string, callback) {
	callback(answer_string);
};
Message.prototype.react = function(data) {
	return false;
};
Message.prototype.answer = function(answer_string, callback) {
	var self = this;
	self.process(answer_string, function(data) {
		if (!data) {
			self.reply = 'I\'m sorry, I\'ve gotten confused.  Let\'s go back.';
			callback(self.id, self.id, callback);
			return;
		}
		callback(self.react(data), self.id, callback);
	});
};
module.exports = Message;