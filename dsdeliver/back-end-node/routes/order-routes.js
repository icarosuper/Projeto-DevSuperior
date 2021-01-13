const express = require('express');
const orderController = require('../controllers/order-controller');

const router = express.Router();

router
	.route('/')
	.get(orderController.getAllOrders)
	.post(orderController.addOrder);

router
	.route('/:id')
	.get(orderController.getOrder)
	.patch(orderController.updateOrder)
	.delete(orderController.deleteOrder);

module.exports = router;
