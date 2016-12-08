/**
 * Created by derek1117 on 7/12/16.
 */
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: "Admin",
        text: "Welcome the chat app",
        createAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: "Admin",
        text: "New user joined",
        createAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage:', message);

        socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        });
    });

    socket.on('disconnect', (socket) => {
        console.log('User was disconnected');
    })
});

server.listen(port, () => {
   console.log(`Server is up on port ${port}`);
});
