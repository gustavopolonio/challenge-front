const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const port = 3000;

let json = require('../products.json');
const products = json.cart.item;

nunjucks.configure("src/", {
  noCache: true,
  express: server
})

server.use(express.static("public/"));


server.get("/", async (request, response) => {

  return response.render("index.html", { products });
})


server.listen(port, () => {
  console.log(`Listening server on ${port}`);
})
