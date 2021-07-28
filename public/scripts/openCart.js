const cartContainer = document.querySelector(".cart-container");
const cartButton = document.getElementById("cart-button");
cartButton.addEventListener("click", () => {
  cartContainer.classList.toggle("open");
})