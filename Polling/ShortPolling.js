const http = require('http');

// Simulated data
let counter = 0;

// Create HTTP server
const server = http.createServer((req, res) => {
    if (req.url === '/poll') {
        // Respond with current counter value
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Current counter value: ${counter}`);
    } else {
        // Serve other requests
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not found');
    }
});

// Start server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

// Periodically update counter (simulated data)
setInterval(() => {
    counter++;
}, 1000);
