const productList = document.querySelector(".product-list");
const product = document.querySelector(".product");
const productImg = document.querySelector(".product-image");
const description = document.querySelector(".product-infos p");
const productAmount = document.getElementById("product-amount");
const productPrice = document.getElementById("product-price");


function fillProductsInfo(items) {
  const image = items[0].image;
  const name = items[0].name;
  const quantity = items[0].quantity;
  const price = items[0].bestPrice;
  const priceFormated = items[0].bestPriceFormated;

  productImg.src = image;
  productImg.alt = name;
  description.innerHTML = name.substring(0,35) + "...";
  productAmount.innerHTML = quantity;
  productPrice.innerHTML = priceFormated;
}


async function getProducts() {
  await fetch("http://localhost:3000/products.json")
    .then(response => response.json())
    .then(products => {
      const items = products.cart.item;
      const quantityProducts = items.length;

      fillProductsInfo(items)

      for (var i = 1; i < quantityProducts; i++ ) {
        const newProduct = product.cloneNode(true);

        newProduct.querySelector(".product-image").src = items[i].image;
        newProduct.querySelector(".product-image").alt = items[i].name;
        newProduct.querySelector(".product-infos p").innerHTML = items[i].name.substring(0,35) + "...";
        newProduct.querySelector(".product-amount span").innerHTML = items[i].quantity;
        newProduct.querySelector(".product-amount strong").innerHTML = items[i].bestPriceFormated;
        

        productList.appendChild(newProduct);
      }


    })
}

getProducts();