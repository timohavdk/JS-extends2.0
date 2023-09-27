const express = require('express');

const server = express();

const HOST = 4000;

global.appConfig = {
	host: HOST,
}

server.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

server.listen(HOST, () => {
	console.log(`Running on: http://localhost:${ global.appConfig.host }/`);
});
