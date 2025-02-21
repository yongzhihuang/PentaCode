// src/index.js
import { server } from "../mocks/server.js";

if (process.env.NODE_ENV !== "production") {
  server.listen();
}

// This is a simple Node.js application that
// does a network request and prints the response.
async function app() {
  const response = await fetch("https://google.com/passwords");
  const user = await response.json();
  console.log(user);
}

app();
