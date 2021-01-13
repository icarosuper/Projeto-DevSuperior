const mongoose = require('mongoose');
const env = require('dotenv');

env.config({ path: './.env' });

const server = require('./server');

const DB = process.env.DATABASE;

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log('Conexão feita com sucesso!');
	});

server.listen(process.env.PORT || 8000, () => {
	console.log(`Server rodando na porta ${process.env.PORT}`);
});
