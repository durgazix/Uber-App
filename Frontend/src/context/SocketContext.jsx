// import { createContext, useEffect } from 'react';
// import { io } from 'socket.io-client';

// export const SocketContext = createContext();

// const socket = io(`${import.meta.env.VITE_BASE_URL}`);

// const SocketProvider = ({ children }) => {
//     useEffect(() => {
//         socket.on('connect', () => {
//             console.log('Connected to server');
//         });

//         socket.on('disconnect', () => {
//             console.log('Disconnected from server');
//         });

//     }, []);
//     return (
//         <SocketContext.Provider value={{ socket }}>
//             {children}
//         </SocketContext.Provider>
//     );
// };

// export default SocketProvider;

import { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const socket = io(import.meta.env.VITE_BASE_URL, {
    transports: ["websocket"], 
    reconnectionAttempts: 5,   
    reconnectionDelay: 1000    
});

const SocketProvider = ({ children }) => {
    useEffect(() => {
        const handleConnect = () => console.log('✅ Connected to WebSocket');
        const handleDisconnect = () => console.log('❌ Disconnected from WebSocket, retrying...');
        const handleError = (error) => console.error("⚠️ WebSocket Error:", error);

        socket.on('connect', handleConnect);
        socket.on('disconnect', handleDisconnect);
        socket.on('connect_error', handleError); // Handle connection errors

        return () => {
            socket.off('connect', handleConnect);
            socket.off('disconnect', handleDisconnect);
            socket.off('connect_error', handleError);
        };
    }, []);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;

