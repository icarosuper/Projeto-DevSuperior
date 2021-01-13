const express = require('express');
const morgan = require('morgan');

const server = express();

if(process.env.NODE_ENV === 'development') server.use(morgan('dev'))

server.use(express.json());

const orderRouter = require('./routes/order-routes');
const productsRouter = require('./routes/product-routes');

server.use('/orders', orderRouter);
server.use('/products', productsRouter);

module.exports = server;