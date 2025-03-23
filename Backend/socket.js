const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;
function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: [ 'GET', 'POST' ]
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);


        socket.on('join', async (data) => {
            const { userId, userType } = data;
            console.log(`User ${userId} joined as ${userType}`);

            if (userType === 'user') {
                await userModel.findByIdAndUpdate(
                    userId, 
                    { socketId: socket.id }, 
                    // { new: true, upsert: true }
                );
            } else if (userType === 'captain') {
                await captainModel.findByIdAndUpdate(
                    userId, 
                    { socketId: socket.id }, 
                    // { new: true, upsert: true }
                );
            }
        });

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}

const sendMessageToSocketId = (socketId, message) => {

// console.log(messageObject);

    if (io) {
        io.to(socketId).emit(message.event, message.data);
    } else {
        console.log('Socket.io not initialized.');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };