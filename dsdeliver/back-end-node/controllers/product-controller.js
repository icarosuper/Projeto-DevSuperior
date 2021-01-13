const Product = require('../models/product-model');

exports.getAllProducts = async (req, res) => {
	try {
		let products = { ...req.query };
		['page', 'sort', 'limit', 'fields'].forEach((el) => {
			delete products[el];
		});

		products = Product.find(products);

		if (req.query.sort)
			products = products.sort(req.query.sort.split(',').join(' '));

		if (req.query.fields)
			products = products.select(req.query.fields.split(',').join(' '));
		else products = products.select('-__v');

		products = await products;

		res.status(200).json({products});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.getProduct = async (req, res) => {
	try {
		const selectedProduct = await Product.findById(req.params.id);

		res.status(200).json({
			status: 'success',
			data: {
				selectedProduct,
			},
		});
	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.addProduct = async (req, res) => {
	try {
		const newProduct = await Product.create(req.body);
		
		res.status(201).json({
			status: 'success',
			data: { product: newProduct },
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.updateProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);

		res.status(200).json({
			status: 'success',
			data: {
				product,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err.message,
		});
	}
};

exports.deleteProduct = async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);

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
