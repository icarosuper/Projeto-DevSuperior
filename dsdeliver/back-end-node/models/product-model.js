const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'O produto deve ter um nome'],
		unique: true,
		trim: true,
	},
	price: {
		type: Number,
		required: [true, 'O produto deve ter um preço definido'],
	},
	description: {
		type: String,
		trim: true,
		required: [true, 'O produto deve ter uma descrição'],
	},
	imageUri: {
		type: String,
		required: [true, 'O produto deve ter uma imagem'],
	},
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
