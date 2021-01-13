const express = require('express');
const morgan = require('morgan');

const server = express();

if(process.env.NODE_ENV === 'development') server.use(morgan('dev'))

module.exports = server;