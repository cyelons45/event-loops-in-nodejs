let fs = require("fs");
let Server = require("http").createServer();
const url = require("url");

Server.on("request", (req, res) => {
  //solution 1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  //   //solution 2
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", chunk => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });

  //   readable.on("error", err => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found");
  //   });

  ///solution 3 fixing problem of back pressure
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
});

Server.listen(8000, "127.0.0.1", () => {
  console.log("Listenning to port 8000......");
});
