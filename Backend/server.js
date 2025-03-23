const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000;
const { initializeSocket } = require("./socket");
const server = http.createServer(app)

initializeSocket(server);

server.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.`);
      process.exit(1);
    } else {
      console.error(`An error occurred: ${err.message}`);
    }
});