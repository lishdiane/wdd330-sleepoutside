import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";
import { getLocalStorage } from "./utils.mjs";



const cart = new ShoppingCart(".product-list"); // Shopping cart module
cart.init(); // Dynamically load cart items

function updateCartCount() {
  const cartItems = getLocalStorage("so-cart") || [];
  const count = cartItems.length;
  const badge = document.querySelector(".cart-count-badge");

  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = "inline-block";
    } else {
      badge.style.display = "none";
    }
  }
}

loadHeaderFooter();
updateCartCount(); // Cart count update

export { updateCartCount };
