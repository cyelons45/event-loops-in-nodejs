const fs = require("fs");
const crypto = require("crypto");

fs.readFile("./test-file.txt", () => {
  console.log("I/O finished");
  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);
  // setImmediate(() => console.log("Immediate 2 finished"));
});
console.log("Hello from from the top-level code");
