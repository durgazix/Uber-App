const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000;

const server = http.createServer(app)



server.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.`);
      process.exit(1); // Exit the application
    } else {
      console.error(`An error occurred: ${err.message}`);
    }
});