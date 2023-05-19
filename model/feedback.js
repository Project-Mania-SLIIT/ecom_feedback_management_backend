const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
	  },
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	productName: {
		type: mongoose.Schema.Types.String,
		ref: "Product",
	},
	productImage: {
		type: mongoose.Schema.Types.String,
		ref: "Product",
	},
	userEmail: {
		type: mongoose.Schema.Types.String,
		ref: "User",
	},
	feedbackId: {
		type: String,
		required: true,
        unique: true,
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