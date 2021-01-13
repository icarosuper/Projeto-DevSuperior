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

// Duplicate the ID field.
productSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
productSchema.set('toJSON', {
    virtuals: true
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
