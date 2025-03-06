const WebSocket = require('ws');
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', ws => {
    console.log("Client connected");
    ws.on('message', message => {
        console.log(`Received: ${message}`);
        ws.send(`Echo: ${message}`);
    });
});

server.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});