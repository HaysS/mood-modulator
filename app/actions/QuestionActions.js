var dispatcher = require("../dispatcher");

module.exports = {
	addSelectedAnswer: function(question) {
		dispatcher.dispatch({
			question: question,
			type: "question:addSelectedAnswer"
		});
	}
}