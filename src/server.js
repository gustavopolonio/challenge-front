const express = require("express");

const server = express();
const port = 3000;
// server.use(express.json());
// server.use(express.urlencoded({ extended: true }));

server.use(express.static("src"));

server.get("/", (request, response) => {
  return response.render("index.html");
})

server.listen(port, () => {
  console.log(`Listening server on ${port}`);
})
