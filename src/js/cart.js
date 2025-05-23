import { getLocalStorage } from "./utils.mjs";

const cart = new ShoppingCart();
cart.init();

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

renderCartContents();
updateCartCount();

export { updateCartCount };
