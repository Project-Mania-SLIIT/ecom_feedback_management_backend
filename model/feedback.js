const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
	feedbackId: {
		type: String,
		required: true,
        unique: true,
	},
	email: {
		type: String,
		required: true,
	},
	satisfaction_rate: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: false,
	},
	code: {
		type: Number,
		required: true,
	},
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;