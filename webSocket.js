const http = require('http');
const { WebSocketServer } = require('ws');
const server = http.createServer((req, res) => {
  res.end('WebSocket server\n');
});
const wss = new WebSocketServer({ server });
wss.on('connection',()=>{
  console.log("Connected");
});
wss.emit("connection");
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
