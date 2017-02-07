'use strict';

var Message = function() {
	this.question = '';
	this.reply = '';
};
Message.prototype.process = function(answer_string) {
	return answer_string;
};
Message.prototype.response = function(answer_string) {
	var data = this.process(answer_string);
	if (!data) {
		this.reply = 'I\'m sorry, I\'ve gotten confused.  Let\'s start over';
		return 0;
	}
};
module.exports = Message;