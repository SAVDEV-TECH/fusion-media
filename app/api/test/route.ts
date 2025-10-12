// File: test_smtp_connection.js
const net = require("net");

const host = "smtp.gmail.com";
const port = 587;
const timeout = 5000; // 5 seconds

console.log(`Testing connection to ${host}:${port} ...`);

const socket = net.createConnection({ host, port });

socket.setTimeout(timeout);

socket.on("connect", () => {
  console.log("✅ Connection successful — SMTP port is open.");
  socket.end();
});

socket.on("timeout", () => {
  console.error("⏰ Connection timed out — likely blocked by firewall or ISP.");
  socket.destroy();
});

socket.on("error", (err) => {
  console.error(`❌ Connection failed: ${err.code || err.message}`);
});

socket.on("close", () => {
  console.log("Connection closed.");
});
