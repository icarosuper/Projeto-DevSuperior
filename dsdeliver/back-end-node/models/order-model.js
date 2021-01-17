const mongoose = require('mongoose');
const OrderStatus = require('./order-status');
const Product = require('./product-model');

const orderSchema = new mongoose.Schema({
	address: {
		type: String,
		required: [true, 'A ordem deve ter um endereço'],
	},
	latitude: {
		type: Number,
		required: [true, 'A ordem deve ter uma latitude'],
	},
	longitude: {
		type: Number,
		required: [true, 'A ordem deve ter uma longitude'],
	},
	moment: {
		type: Date,
		default: Date.now(),
	},
	status: {
		type: OrderStatus,
		default: OrderStatus.PENDING,
	},
	products: {
		type: [Product.schema],
		required: [true, 'Um pedido deve ter ao menos um produto'],
	},
});

// Duplicate the ID field.
orderSchema.virtual('id').get(function () {
	return this._id.toHexString();
});

// Ensure virtual fields are serialised.
orderSchema.set('toJSON', {
	virtuals: true,
});

const Order = mongoose.model('Orders', orderSchema);

module.exports = Order;
