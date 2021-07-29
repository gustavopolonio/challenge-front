const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const port = 3000;

nunjucks.configure("src/", {
  noCache: true,
  express: server
})

server.use(express.static("public/"));

var formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

let json = require('../products.json');
const products = json.cart.item;
let totalAmountNotFormated = 0;

for (product of products) {
  totalAmountNotFormated += product.bestPrice;
}

const totalAmountStr = totalAmountNotFormated.toString();
const totalAmount = totalAmountStr.substring(0, totalAmountStr.length - 2) + "." + totalAmountStr.substring(totalAmountStr.length - 2);
const totalAmountFormated = formatter.format(totalAmount);


server.get("/", async (request, response) => {

  return response.render("index.html", { products, totalAmountFormated });
})


server.listen(port, () => {
  console.log(`Listening server on ${port}`);
})
