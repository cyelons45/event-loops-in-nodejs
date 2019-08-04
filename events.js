const EventEmitter = require("events");
let fs = require("fs");
let http = require("http");
const url = require("url");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", stock => {
  console.log(`Customer name :Jonas`);
  console.log(`stock Value=${stock}`);
});

myEmitter.emit("newSale", 9);

////////////////////////////////////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request received");
});

server.on("request", (req, res) => {
  res.end("Another request");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
