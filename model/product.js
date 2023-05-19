const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
	supplierId: {
		type: mongoose.Schema.Types.ObjectId,
		required: false,
		ref: "User",
	},
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	itemCode: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	image: {
		type: String,
		required: false,
		default: "https://res.cloudinary.com/dfmnpw0yp/image/upload/v1679235307/assets/tsuh9f6v1reihgqxwxrz.ico",
	},
	price: {
		type: Number,
		required: false,
	},
	quantity: {
		type: Number,
		required: false,
	},
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
