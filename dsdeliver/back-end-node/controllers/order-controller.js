const Order = require('../models/order-model');
const Product = require('../models/product-model');

exports.getAllOrders = async (req, res) => {
	try {
		let orders = { ...req.query };
		['page', 'sort', 'limit', 'fields'].forEach((el) => {
			delete orders[el];
		});

		orders = Order.find(orders);

		if (req.query.sort)
			orders = orders.sort(req.query.sort.split(',').join(' '));
		else orders = orders.sort('-moment');

		if (req.query.fields)
			orders = orders.select(req.query.fields.split(',').join(' '));
		else orders = orders.select('-__v');

		orders = await orders;

		res.status(200).json({
			status: 'success',
			results: orders.length,
			data: {
				orders,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.getOrder = async (req, res) => {
	try {
		const selectedOrder = await Order.findById(req.params.id);

		res.status(200).json({
			status: 'success',
			data: {
				selectedOrder,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.addOrder = async (req, res) => {
	try {
		let products = [];

		for(const item of req.body.products){
			const product = await Product.findById(item.id).select('-__v');
			products.push(product);
		}

		if(!products.length){
			throw new Error('Um pedido deve conter ao menos um produto.');
		}

		req.body.products = products;

		const newOrder = await Order.create(req.body);
		
		res.status(201).json(newOrder);
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.updateOrder = async (req, res) => {
	try {
		const order = await Order.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);

		res.status(200).json({
			status: 'success',
			data: {
				order,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.deleteOrder = async (req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.id);

		res.status(204).json({
			status: 'success',
			data: null,
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};
