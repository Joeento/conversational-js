# conversational.js

conversational.js is a lightweight, easy to use Node.js framework for building your own chatbots.  The goal is to create a way for anyone who knows some code and can imagine a conversation as a flow diagram to make their own chatbot.

### How It Works
A conversation between a person and a bot generally follows one pattern: The chatbot asks the question, the user answers, and the chatbot reacts and moves onto the next question.  Or, in slightly more detail:
1. The chatbot asks a question
2. The user anwsers the question
3. The chatbot converts plain english into usable data(e.g. "sure", "ok", and "yes please" probably mean the same thing)
4. The chatbot takes action 
5. The chatbot sends back a reply
6. The chatbot determines the next question
5. Repeat

### Code
Knowing this algorithm, we can build an execution loop that mimicks a conversation pretty easily just by creating a couple of parameters for each question/answer.  Each conversation is made up of `Message` objects. For each `Message` we want to override certain parameters:

 * `id`: a unique identifier that a message is called by.
 * `question`: a query of information from bot to user.
 * `process`: a function that takes in the user's answer, and breaks it down into usable data.  When finished it should call it's (highlighted)callback function with the parsed data as a paramter
 * `react`: A function to be overriden code for taking whatever action is required with the parsed data.  When finished, it should call (highlighted) callback with the (highlighted) id of the next question.
 * `reply`: a simple response like "Thanks" or "Cool".  However, if you'd like to customize your reply to given info, you can set (highlighted) reply_override, which will set a reply to be send only once based on your input.

### Example
That may seem like a lot but it's pretty easy once you visualize it.  Below is a diagram for a bot that sends messages reminding them of notes at a certain time.

![conversation flowchart](https://raw.githubusercontent.com/Joeento/conversational-js/master/example/flowchart.png)

And here's an example of the first message:
```
{
		id: 1,
		question: 'Hi! Would you like to schedule a reminder for later?',
		reply: 'Ok!',
		process: function(answer_string, callback) {
			var yes_options = ['yes', 'yes please', 'yeah', 'sure', 'ok', 'definitely'];
			var no_options = ['no', 'no thanks', 'nope', 'not now', 'no thank you', 'i don\'t think so'];
			var answer = false;
			if (yes_options.indexOf(answer_string.toLowerCase()) > -1) {
				answer = 'yes';
			} else if (no_options.indexOf(answer_string.toLowerCase()) > -1) {
				answer = 'no';
			}
			callback(answer);
		},
		react: function(data) {
			if (data === 'yes') {
				return 2;
			} else if (data === 'no') {
				this.reply_override = 'I\'ll leave you alone then. Message me later if you change your mind.';
				return false;
			}
		}
	}
```
The full example can be found in [example/messages.js](https://github.com/Joeento/conversational-js/blob/master/example/messages.js)

### Under Construction
This project(including the README) is still a work in progress.  A bunch of features are still under development and they're mostly new territory for me.  So stay tuned or feel free to submit your own pull request!

