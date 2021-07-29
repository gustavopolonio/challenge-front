const cartContainer = document.querySelector(".cart-container");
const cartButton = document.getElementById("cart-button");
let showCartItems = true;

cartButton.addEventListener("click", () => {
  if (!showDefaultMenu) {
    menuSection.classList.toggle("on", showDefaultMenu);
    showDefaultMenu = !showDefaultMenu;
  }

  cartContainer.classList.toggle("open", showCartItems);
  showCartItems = !showCartItems;
})


const menuToggle = document.querySelector(".menu-toggle");
const menuSection = document.querySelector(".menu-section");
const navBar = document.querySelector(".header-content nav");
let showDefaultMenu = true;

menuToggle.addEventListener("click", () => {
  if (!showCartItems) {
    cartContainer.classList.toggle("open", showCartItems);
    showCartItems = !showCartItems;
  }

  menuSection.classList.toggle("on", showDefaultMenu);
  showDefaultMenu = !showDefaultMenu;

  menuSection.appendChild(navBar);
})