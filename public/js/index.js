/**
 * Created by derek1117 on 8/12/16.
 */
var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    // socket.emit('createMessage', {
    //     from: 'Client',
    //     text: 'Hi'
    // });
});

socket.on('newMessage', function(message) {
    console.log('New message:', message);
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});