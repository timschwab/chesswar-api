// Libraries
const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
	cors: {
		origin: "https://chesswar.io",
		methods: ["GET", "POST"]
	}
});

// Constants
const port = 8000;

// Serve it up
io.on('connection', (socket) => {
	console.log('A user connected');

	socket.on('message', (msg) => {
		console.log('message:' + msg);
		io.emit('message', msg);
	});
});

server.listen(port, () => console.log('Site running on ' + port));
