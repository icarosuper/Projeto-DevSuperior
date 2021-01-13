const mongoose = require('mongoose');
const OrderStatus = require('./order-status');

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
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
